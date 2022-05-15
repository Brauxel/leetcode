function connectSticks(sticks: number[]): number {
    if(sticks.length === 1) {
        return 0
    }

    sticks.sort()

    console.log('sorted', sticks);
    

    // const lengthOfSticks = sticks.length
    let i = 0
    let minCost = 0
    while(i < sticks.length) {        
        console.log('i', i, sticks[i]);

        if(i === 1 || i === 0) {
            minCost += ((sticks.length - 1) * sticks[i])
        } else {
            minCost += ((sticks.length - i) * sticks[i])
        }
        
        if((sticks.length - i) === 1) {
        } else {
        }
        i++;
    }
    

        
    return minCost
};