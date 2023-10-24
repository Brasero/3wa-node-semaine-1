import {readFileSync} from "node:fs";
import {parse} from "dotenv";

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