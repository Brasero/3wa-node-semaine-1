import calcTTC from './utils.js'



const priceHT = [
    { name : "Apple", priceHT : 1.0, priceTTC : null },
    { name : "Orange", priceHT : 1.2, priceTTC : null },
    { name : "Rasberry", priceHT : 2.5, priceTTC : null },
];

for(const prod of priceHT) {
    prod.priceTTC = calcTTC(prod.priceHT)
}


console.log(process.env)