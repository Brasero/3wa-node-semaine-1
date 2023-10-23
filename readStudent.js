import fs from 'node:fs'

//On lit le fichier student.txt de manière asynchrone
fs.readFile('student.txt', 'utf8', (err, data) => {

    //Si la lecture du fichier génère une erreur, on l'affiche et ont stop la fonction de callback
    if (err) {
        console.error(err);
        return
    }

    // on récupère chaque ligne de notre fichier en découpant sur les retours à la ligne
    const lines = data.split(/\r?\n/);
    //La première ligne récupérée contient les indexe, on la split également sur les éspaces
    const indexes = lines[0].split(' ')

    //On passe chaque index en minuscule
    indexes.map((index, i) => {
        return indexes[i] = index.toLowerCase()
    })

    const students = [];

    //Enfin, on récupère chaque ligne pour en faire un objet que l'on push dans notre tableau student
    for(let i = 1; i < lines.length; i++) {
        const student = {}
        const values = lines[i].split(' ');
        for (let j = 0; j< values.length; j++) {
            student[indexes[j]] = values[j]
        }

        students.push(student)
    }

    //On trie la liste en fonction de la note de chaque étudiant
    students.sort((a,b) => {return b.notes - a.notes});

    //On termine en écrivant cette liste dans un fichier json
    fs.writeFile('student.json', JSON.stringify(students), (err) => {
        if (err) {
            console.error(err)
            process.exit(0)
        }
    })

    console.table(students)
})