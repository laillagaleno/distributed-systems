const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.error(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  const message = msg.toString().trim();
  if (message.toLowerCase() === 'end') {
    server.send("Pane no sistema! Alguem se desconectou\n", rinfo.port, rinfo.address);
    server.close(); // Fecha o servidor se receber 'end'
  }
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(3000, '10.0.0.112');