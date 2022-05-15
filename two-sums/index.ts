function twoSum(nums: number[], target: number): number[] {
    // use single pass hashmap
    const sumPairMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i]

        if(sumPairMap.has(remainder)) {
            return [i, sumPairMap.get(remainder)]
        }

        sumPairMap.set(nums[i], i)
    }

    return null
};