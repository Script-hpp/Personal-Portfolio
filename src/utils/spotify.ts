import { Buffer } from 'buffer';

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const getAccessToken = async () => {
  try {
    console.log('Getting access token...');
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN || '',
      }).toString(),
      mode: 'cors',
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Token response not OK:', response.status, error);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Got access token successfully');
    return data;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

export const getNowPlaying = async () => {
  try {
    console.log('Getting now playing...');
    const { access_token } = await getAccessToken();
    console.log('Using access token:', access_token);

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Accept': 'application/json',
      },
      mode: 'cors',
    });

    console.log('Now playing response status:', response.status);

    if (response.status === 204) {
      console.log('No track currently playing');
      return { isPlaying: false };
    }

    if (response.status >= 400) {
      console.error('Error response:', response.status);
      const errorText = await response.text();
      console.error('Error details:', errorText);
      return { isPlaying: false };
    }

    const song = await response.json();
    console.log('Got song data:', song);
    
    if (!song.item) {
      console.log('No song item in response');
      return { isPlaying: false };
    }

    return {
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: song.item.artists.map((_artist: any) => _artist.name).join(', '),
      album: song.item.album.name,
      albumImageUrl: song.item.album.images[0].url,
      songUrl: song.item.external_urls.spotify,
    };
  } catch (error) {
    console.error('Error getting now playing:', error);
    return { isPlaying: false };
  }
};
