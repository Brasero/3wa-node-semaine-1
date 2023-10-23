/*
18 Sonia Paris

17 Clarisse Marseille
 */

import {appendFileSync, readFile, writeFile} from 'node:fs';

const students = [
    "18 Sonia Paris",
    "17 Clarisse Marseille"
]

students.forEach((student) => {
    appendFileSync('student.txt', '\n'+student)
    console.log(student)
})


readFile('student.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const lines = data.split(/\r?\n/)
    for (let i = 1; i < lines.length; i++) {
        const [note, name, adress] = lines[i].split(' ')
        lines[i] = `${note} ${name.toUpperCase()} ${adress}`
    }

    writeFile('student.txt', lines.join('\n'), (err) => {
        if (err) throw err;
        console.log('Traitement terminée')
    })
})
