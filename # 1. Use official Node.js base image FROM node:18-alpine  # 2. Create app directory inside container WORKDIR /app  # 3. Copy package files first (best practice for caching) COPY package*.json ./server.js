// server.js
const express = require('express');
const app = express();

let isHealthy = true;  // for liveness
let isReady = true;    // for readiness

// Liveness probe endpoint
app.get('/healthz', (req, res) => {
  if (isHealthy) {
    res.status(200).send('OK');
  } else {
    res.status(500).send('Not Healthy');
  }
});

// Readiness probe endpoint
app.get('/ready', (req, res) => {
  if (isReady) {
    res.status(200).send('Ready');
  } else {
    res.status(500).send('Not Ready');
  }
});

// Example main endpoint
app.get('/', (req, res) => {
  res.send('Hello from Node.js app!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Simulate failing liveness after 30s (for testing)
setTimeout(() => {
  console.log('Simulating liveness failure...');
  isHealthy = false;
}, 30000);

// Simulate readiness failure after 60s (for testing)
setTimeout(() => {
  console.log('Simulating readiness failure...');
  isReady = false;
}, 60000);
