function lengthOfLongestSubstring(s: string): number {
    let res = 0
    const stringMap = new Map()
    let i = 0

    for (let j = 0; j < s.length; j++) {
        const character = s.charAt(j)

        if(stringMap.has(character)) {
            i = Math.max(stringMap.get(character), i)
        }

        res = Math.max(res, j - i + 1)
        stringMap.set(character, j + 1)
    }

    return res
}