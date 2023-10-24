import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const students = ["Alan", "Sonia", "Sophie"];


// rl.question('Bonjour comment allez vous\n', (answer) => {
//     console.log(answer)
// })


rl.setPrompt('FIND A STUDENT> ')
rl.prompt()


rl.on('line', (line) => {

    students.map((student) => {
        student = student.toLowerCase().trim()
        if(student === line.toLowerCase().trim()) {
            console.log("C'est gagné !")
            rl.close()
        }
    })

    console.log("Essayé encore \n")
    rl.prompt()
})

rl.on("close", () => {
    process.exit()
})