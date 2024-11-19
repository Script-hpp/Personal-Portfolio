import React, { useEffect, useState } from 'react';
import { Box, Typography, Link, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { getNowPlaying } from '../utils/spotify';

interface SpotifyData {
  isPlaying: boolean;
  songUrl?: string;
  title?: string;
  artist?: string;
  albumImageUrl?: string;
}

const SpotifyNowPlaying = () => {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const songData = await getNowPlaying();
        setData(songData);
      } catch (error) {
        setError('Failed to fetch Spotify data');
        console.error('Spotify error:', error);
      }
    };

    fetchData();
    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (error) return null;
  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          p: 2,
          backgroundColor: 'rgba(30, 215, 96, 0.1)', // Spotify green with low opacity
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          border: '1px solid rgba(30, 215, 96, 0.2)',
          maxWidth: 'fit-content'
        }}
      >
        <MusicNoteIcon sx={{ color: '#1ED760' }} />
        {data.isPlaying && data.title ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {data.albumImageUrl && (
              <img
                src={data.albumImageUrl}
                alt="Album art"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 4,
                }}
              />
            )}
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: '#fff',
                  opacity: 0.7,
                  fontSize: '0.75rem',
                  mb: 0.5
                }}
              >
                Currently playing on Spotify
              </Typography>
              <Link
                href={data.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#1ED760',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {data.title} • {data.artist}
                </Typography>
              </Link>
            </Box>
          </Box>
        ) : (
          <Typography variant="body2" sx={{ color: '#fff', opacity: 0.7 }}>
            Not playing anything
          </Typography>
        )}
      </Paper>
    </motion.div>
  );
};

export default SpotifyNowPlaying;
