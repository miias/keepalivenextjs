// server.js

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const axios = require('axios');

app.prepare().then(() => {

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
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (req.method === 'HEAD') {
      // Handle HEAD request here
      await pingWebsite();
      console.log('Received a HEAD request');
      // Send the response without content for HEAD requests
      res.end();
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
