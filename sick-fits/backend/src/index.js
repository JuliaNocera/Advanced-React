// This will start up our node server
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

// We'll add authentication in the future

const server = createServer()

// TODO: Use express middleware to handle cookies (JsonWebTokens)
// TODO: Use express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  }, (details) => {
    console.log(`Server is now running on port http://localhost:${details.port}`)
  }
);