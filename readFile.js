//L'API File System (fs) nous permet de lire et d'écrire dans des fichiers,
// elle est disponible nativement dans node
// elle nous donne accès à des fonctions asynchrones et synchrones comme readFile et readFileSync
import fs from 'node:fs'

// const content = fs.readFileSync('./data.txt', 'utf8')
//
// console.log(content)

fs.readFile('./data.txt', 'utf8', (err, content) => {

    if(err) return;

    console.log(content)
})