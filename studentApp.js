//Student app se rapproche plus d'une application back
//Ici la partie "métier" a été séparer de la partie interface

import fs from "node:fs";

const commands = [
    {
        name: "list",
        description: "Liste tout les élèves."
    },
    {
        name: 'find',
        description: "Cherche puis affiche les infos d'un élève si il existe."
    }
]

const fileInfo = fs.readFileSync('student.json', 'utf8')
const students = JSON.parse(fileInfo)

const list = () => {
    console.table(students)
}

const find = (name) => {
    const student = students.filter((stud) => {
        return stud.name.trim().toLowerCase() === name.trim().toLowerCase()
    })

    if (student) {
        console.log(student)
    } else {
        process.stdout.write("cette élève n'existe pas");
    }
}

const more = (note) => {
    const data = parseInt(note)
    if (isNaN(data)) {
        console.log("La valeur saisie après more doit être un nombre")
        return;
    }
    const array = students.filter((stud) => {
        return stud.notes > data
    })

    if (array) {
        console.table(array)
    } else {
        console.log("Aucun élève n'a une note supérieur à " + data)
    }
}

function extractArg(input) {
    return input.split(' ')[1]
}

process.stdin.on("data", (chunk) => {
    const data = chunk.toString()
    const text = data.replace('\r\n', '')
    let arg;

    switch(text) {
        case 'list':
            list();
            break;

        case text.match(/^find /) ? text : null :
            arg = extractArg(text);
            find(arg)
            break;

        case text.match(/^more /) ? text : null :
            arg = extractArg(text);
            more(arg)
            break;

        default:
            console.group("Cette commande n'existe pas.")
                console.log('Voici les commandes disponible')
                console.table(commands)
            console.groupEnd()
    }
})