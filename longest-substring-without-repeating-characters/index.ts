function checkRepetition(s: string, start, end) {
    const characters = new Set()

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i)
        if(characters.has(c)) {
            return true
        }
        characters.add(c)        
    }

    return false
}

function lengthOfLongestSubstring(s: string): number {
    let n = s.length
    let res = 0

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if(checkRepetition(s, i, j)) {
                res = Math.max(res, j - i +1)
            }
        }        
    }

    return res
};

