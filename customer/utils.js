function calcTTC(priceHT, tva = 0.2) {
    priceHT = parseFloat(priceHT)

    if (isNaN(priceHT)) {
        console.error(`${priceHT} n'est pas un nombre`);
    }

    return ((1 + tva) * priceHT).toFixed(2);
}

export default calcTTC;