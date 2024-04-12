const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const serverAddress = '10.0.0.112';
const serverPort = 3000;

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.addListener('line', (line) => {
  client.send(line, serverPort, serverAddress, (err) => {
    if (err) {
      console.error(`Error sending message: ${err}`);
    } else {
      console.log(`Message sent to server: ${line}`);
    }
  });
});
