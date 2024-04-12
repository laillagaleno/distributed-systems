const net = require('net')
const readline = require('readline')

const client = new net.Socket()
const rl = readline.createInterface({
    input: process.stdin, //entrada de dados
    output: process.stdout //saida de dados
})

client.connect(3000, '10.0.0.112', () => {
    console.log("Conectado ao servidor")

    //enviando dados para o servidor
    rl.addListener('line', (line) => {
        client.write(line)
    })
})