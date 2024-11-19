import fetch from 'node-fetch';
import { Buffer } from 'buffer';

const client_id = '2bb23c9b07fb43bfbd688e8d8001c968';
const client_secret = '53413e29650e414e9be11ebeed5c11f1';
const code = 'AQAEhaUVpJRBJjEiFv50kXEhsqZul5X1NR4gaQ4JYTPLlznRsFXZknLN1B1aAvT9qI07MLh-mMID9ig4D0EWLuE89rF2NmmX8X2j47NKGi2bGxKYZXxEzl10r5_F4GH6NvYAPEEoswcxmMbjMczRY5eP4Q74SKA8DEwpyYBEtJjHUXXPTMy1ktqjIZbhMH91COwlUEPzqCABu_5-io_HTtdB3D6Xu7aOb1xa5FY9vFc';
const redirect_uri = 'http://localhost:3000';

async function getToken() {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_uri
      }).toString()
    });

    const data = await response.json();
    console.log('Full response:', data);
    console.log('\nRefresh token:', data.refresh_token);
  } catch (error) {
    console.error('Error:', error);
  }
}

getToken();
