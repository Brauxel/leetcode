const romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
const subtractionInstances = {
    I: ['V', 'X'],
    X: ['L','C'],
    C: ['D', 'M']
}

function romanToInt2(numeral: string): number { 
    const providedNumeralSplit = numeral.split('')
    let sum = 0;
    let i = 0
    while(i < providedNumeralSplit.length) {
        if(Object.keys(subtractionInstances).includes(providedNumeralSplit[i]) && subtractionInstances[providedNumeralSplit[i]].includes(providedNumeralSplit[i + 1])) {
            sum = sum + romanNumerals[providedNumeralSplit[i + 1]] - romanNumerals[providedNumeralSplit[i]]
            i++
        } else {
            sum = sum + romanNumerals[providedNumeralSplit[i]]
        }
        i++;
    }
    
    return sum
};