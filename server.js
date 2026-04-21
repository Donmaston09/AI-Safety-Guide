const express = require('express');
const path = require('path');
const app = express();
const DEFAULT_PORT = Number(process.env.PORT) || 3000;
const MAX_PORT_ATTEMPTS = 10;

app.use(express.static(path.join(__dirname)));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

function startServer(port, attemptsLeft) {
  const server = app.listen(port, () => {
    console.log(`AI Safety Guide running on port ${port}`);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE' && attemptsLeft > 0) {
      console.log(`Port ${port} is busy, trying ${port + 1}...`);
      startServer(port + 1, attemptsLeft - 1);
      return;
    }

    console.error(`Could not start server on port ${port}.`);
    if (error.code === 'EADDRINUSE') {
      console.error('Set a custom port with PORT=3100 npm start or close the app using that port.');
    }
    console.error(error.message);
    process.exit(1);
  });
}

startServer(DEFAULT_PORT, MAX_PORT_ATTEMPTS);
