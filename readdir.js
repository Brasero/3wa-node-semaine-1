import {readdir, statSync} from 'node:fs';


// (F / D) - app.js - 300o

readdir("./",  {withFileTypes: true},(err, files) => {
    if (err) throw err;

    files.forEach((file) => {
        const values = [
            file.isDirectory() ? 'D' : 'F',
            file.name
        ]

        if(!file.isDirectory()) {
            const {size} = statSync(file.name)
            values.push(size+' o')
        }

        console.log(values.join(' - '))
    })

})