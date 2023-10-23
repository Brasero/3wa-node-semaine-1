//node nous fourni un certain nombre d'API comme 'os' ci-dessous
//En type module, on utilisera le système d'import pour charger nos API
//En type commonJS, on passera par la fonction require() comme illustrer par l'éxemple en commentaire
import os from 'node:os';
//const os = require('node:os');

const { username } = os.userInfo();

console.log(username);

