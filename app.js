import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// rl.question('Bonjour comment allez vous\n', (answer) => {
//     console.log(answer)
// })


rl.setPrompt('STUDENT> ')
rl.prompt()


rl.on('line', (line) => {
    switch(line) {
        case "test":
            rl.question("Quel est votre nom \n", (answer) => {
                const Person = {
                    name: answer,
                    age: null
                }
                rl.question("Quel age avez vous ? \n", (answer) => {
                    Person.age = answer
                    console.log(Person)
                    rl.close()
                })
            })
    }
    rl.prompt()
})

rl.on("close", () => {
    console.log('Bye')
    process.exit()
})