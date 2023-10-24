//Student app se rapproche plus d'une application back
//Ici la partie "métier" a été séparer de la partie interface
import utils from './utils.js'

const {list, find, more, extractArg} = utils

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