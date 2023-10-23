import {watch} from 'node:fs'

watch('./', (event, filename) => {
    console.log(event)
    if(filename) {
        console.log(filename)
    }
})