import {readFileSync} from "node:fs";
import dotenv from "dotenv";

dotenv.config()

const data = JSON.parse(readFileSync('./students.json', 'utf8'))

const {students} = data

const average = (notes) => {
    const sum = notes.reduce((acc, current) => acc + current, 0)
    return sum / notes.length
}

export const findStudent = (searchName) => {

    const student = students.find((student) => student.name.toLowerCase().trim() === searchName)

    if(student !== -1) {
        const {notes} = student
        student.average = average(notes)
    }

    return student ? student: false
}

export const addNote = (name, note) => {
    const student = findStudent(name)
    note = parseInt(note)
    if(isNaN(note)) {
        return
    }
    student.notes.push(note)
    student.average = average(student.notes)
    console.log(student)
}

export const mention = (name) => {
    const student = students.find((student) => student.name.toLowerCase().trim() === name.toLowerCase().trim())
    if (student === -1) {
        console.log('cet étudiant n\'existe pas')
        return
    }
    student.average = average(student.notes)
    const {average: averageNote} = student
    console.log(averageNote)
    if(averageNote < 12) {
        student.mention = process.env.P
    } else if(averageNote >= parseFloat(12) && averageNote < parseFloat(14)) {
        student.mention = process.env.AB
        console.log('test')
    } else if(averageNote >= 14 && averageNote < 16) {
        student.mention = process.env.B
    } else {
        student.mention = process.env.TB
    }

    console.log(student)
}

export const mentionAll = () => {
    students.map((student) => {
        mention(student.name)
    })
    console.log(students)
}