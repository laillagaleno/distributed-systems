const net = require('net')

const handleConnection = (socket) => {
    console.log("Alguem se conectou")

    //verificar se alguem se desconectou
    socket.on('end', () => {
        console.log("Alguem se desconectou")
    })

    socket.on('close', () => {
        console.log(`Client ${socket.remoteAddress}:${socket.remotePort} disconnected.`);
      });

    //quando vc recebe dados do cliente
    socket.on('data', (data) => {
        const message = data.toString().trim();
        if (message.toLowerCase() === 'end') {
          socket.write("Pane no sistema! Alguem se desconectou\n");
          socket.emit('close') 
        } else {
          console.log(`Client message: ${message}`);
        }
    })
}

const server = net.createServer(handleConnection)

server.listen(3000, '10.0.0.112')