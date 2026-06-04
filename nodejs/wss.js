import { WebSocketServer } from 'ws';

// Listen on port 3000 and bind to 0.0.0.0 for external availability
const wss = new WebSocketServer({ port: 3000, host: '0.0.0.0' });

console.log('🚀 WebSocket server running on ws://0.0.0.0:3000');

wss.on('connection', (ws) => {
  // Generate a random hex color for this browser tab session
  console.log(`\x1b[30m\x1b[42m CONNECTED \x1b[0m`);

  if (wss.clients.size === 0) {
    console.warn("Warning: wss.clients is empty during CONNECTION");
} else {
    console.warn("CONNECTION wss.clients.size: " + wss.clients.size);
}

  ws.on('message', (message) => {
      if (wss.clients.size === 0) {
    console.warn("Warning: wss.clients is empty during MESSAGE");
} else {
    console.warn("MESSAGE wss.clients.size: " + wss.clients.size);
}
    try {
      // Parse the incoming string into a JSON object
      const packet = JSON.parse(message);
      console.log(`got event "${packet.event}" with data:`, packet.data);

      // Re-serialize the packet to broadcast to all open browser tabs
      const broadcastData = JSON.stringify({ event: packet.event, data: packet.data });

      wss.clients.forEach((client) => {
        console.log("trying to broadcast data to client in state: ", client.readyState)
        if (client.readyState === 1) { // 1 means OPEN
          client.send(broadcastData);
          console.log("broadcasted");
        }
      });
    } catch (err) {
      console.error('Failed to process message:', err);
    }
  });

  ws.on('close', () => {
    console.log(`\x1b[30m\x1b[41m DISCONNECTED \x1b[0m A client tab closed.`);
  });
});
