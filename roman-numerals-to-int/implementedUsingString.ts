const romanNumeralValues = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900, I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
const doubleValues = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']

function romanToInt(romanNumeral: string): number {
    if(romanNumeral.length === 1) {
        return romanNumeralValues[romanNumeral]
    }

    let sum = 0
    let i = 0;

    while(i < romanNumeral.length) {
        const sub = romanNumeral.substring(i, i + 2)
        
        if(doubleValues.includes(sub)) {
            sum = sum + romanNumeralValues[sub]
            i++;
        } else {
            sum = sum + romanNumeralValues[romanNumeral.charAt(i)]          
        }
        i++
    }

    return sum
};