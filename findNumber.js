const random = Math.floor(Math.random() * 100);
let attemps = 0;
const limit = 5;

process.stdout.write("Devinez le nombre entre 0 et 100 \n");

process.stdin.on('data', (data) => {
    if(isNaN(parseInt(data.toString()))) {
        process.stdout.write("Merci de saisir uniquement des nombres \n")
        return;
    }
    attemps++;
    const number = Number(data.toString().trim())

    if (attemps >= limit) {
        process.stdout.write(`Vous avez perdu, la limite de ${limit} essais à été dépassée \n`);
        process.exit();
    }

    if (number === random) {
        process.stdout.write(`Vous avez gagné en ${attemps} essais \n`)
        process.exit(0)
    }

    if (number > random) {
        process.stdout.write("Le nombre caché est plus petit \n")
    }

    if (number < random) {
        process.stdout.write("Le nombre caché est plus grand \n")
    }

    process.stdout.write(`Il vous reste ${limit - attemps} essais \n`)
})
