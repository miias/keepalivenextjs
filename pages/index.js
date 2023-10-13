// pages/index.js

import React from 'react';
import axios from 'axios';
const HomePage = () => {
  return (
    <div>
      <h1>My Next.js App</h1>
    </div>
  );
};
export async function getServerSideProps(context) {
  const WEBSITE_URL = 'https://dynamic-helpful-drill.glitch.me';
  const PING_INTERVAL_MS = 120000;


  async function pingWebsite() {
    console.log(`Pinging ${new Date()}`);

   await axios.get(WEBSITE_URL)
        .then(response => {
            console.log(`Ping successful at ${new Date()}`);
        })
        .catch(error => {
            console.error(`Failed to ping ${WEBSITE_URL}. Error: ${error.message}`);
        });
}
await pingWebsite();
  return {
   props:{}
  };
};
export default HomePage;
