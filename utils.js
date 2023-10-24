import fs from "node:fs";

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

export default {
    list,
    find,
    more,
    extractArg
}