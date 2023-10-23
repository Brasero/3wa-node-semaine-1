// process.stdin.read()
//
// process.stdout.write('hello')
//
// process.stderr.write("erreur")

process.stdin.on('data', (chunk) => {
    const text = chunk.toString()
    process.stdout.write(`Vous avez saisi ${text}`);
})