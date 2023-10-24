import readline from 'node:readline'
import {readFileSync} from "node:fs"
import {addNote, findStudent, mentionAll, mention} from './studentUtils.js'
import dotenv from 'dotenv';

dotenv.config()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const data = JSON.parse(readFileSync('./students.json', 'utf8'))

const {students} = data


// rl.question('Bonjour comment allez vous\n', (answer) => {
//     console.log(answer)
// })

rl.setPrompt('FIND A STUDENT> ')
rl.prompt()


rl.on('line', (line) => {


    if (line.trim() === 'quit') {
        rl.close()
    }

    switch(line) {
        case line.match(/^addNote /) ? line : null:
            rl.question("A quel élève souhaitez vous ajouter une note ?\n", (answer) => {
                const name = answer.toLowerCase().trim()
                rl.question("Quel est la note à ajouter ? \n", (answer) => {
                    const note = answer
                    addNote(name, note);
                    console.log("note ajoutée")
                    rl.prompt()
                })
            })
            break;

        case line.match(/^mention /) ? line : null:
            const arg = line.split(' ')[1]
            mention(arg)
            break;

        case 'mention':
            mentionAll()
            break;

        default:
            const student = findStudent(line.toLowerCase().trim())
            console.log(`${student.name} - Moyenne de l'élève : ${student.average}`)
    }

    rl.prompt()
})

rl.on("close", () => {
    console.log("A bientôt.")
    process.exit()
})