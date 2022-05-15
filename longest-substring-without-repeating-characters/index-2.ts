function lengthOfLongestSubstring(s: string): number {
    let res = 0
    const stringMap = new Map()
    let left = 0
    let right = 0

    while(right < s.length) {
        const char = s.charAt(right)
        if(stringMap.has(char)) {
            stringMap.set(char, stringMap.get(char) + 1)
        } else {
            stringMap.set(char, 1)
        }

        while(stringMap.get(char) > 1) {
            const l = s.charAt(left)
            stringMap.set(char, stringMap.get(char) - 1)
            left++
        }

        res = Math.max(res, right - left + 1)

        right++
    }

    return res
}