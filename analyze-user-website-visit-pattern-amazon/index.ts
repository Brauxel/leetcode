function breakIntoGroupsOfThree(pattern: string[]) {
    let i = 0 

    let patternsOfThree = []
    for(let i = 0; i < pattern.length - 2; i++) {
        let a = i + 1    

        while(a !== pattern.length - 1) {
            let b = a + 1
            while(b !== pattern.length) {
                patternsOfThree.push([pattern[i], pattern[a], pattern[b]])
                b++;
            }
            a++
        }
    }

    return patternsOfThree
}

function computeHighestPattern (pattern: string[], patternsAll: string[], occurrencesAll: number[]) {
    const workAblePatternArray = pattern.length > 3 ? breakIntoGroupsOfThree(pattern) : [pattern]
    for(let singlePattern of workAblePatternArray) {
        const joinedPattern = singlePattern.join('-')
        const index = patternsAll.indexOf(joinedPattern)
        if(index < 0) {
            patternsAll.push(joinedPattern)
            occurrencesAll.push(1)
        } else {
            occurrencesAll[index]++
        }
    }
    
    return [patternsAll, occurrencesAll]
}

function mostVisitedPattern(username: string[], timestamp: number[], website: string[]): string[] {
    // queue = [[username[i], website[i], timestamp[i]]]
    let queue = []
    for(let i = 0; i < username.length; i++) {
        queue.push([username[i], website[i], timestamp[i]])
    }
    // sort the queue by users
    queue.sort((a, b) => {
        if(a[0].localeCompare(b[0]) < 0) {
            return -1
        }

        if(a[0].localeCompare(b[0]) > 0) {
            return 1
        }

        return 0
    })

    console.log('queue', queue);
    

    let i = 0
    
    let patternsAll = []
    let occurrencesAll = []
    while(queue.length > 0) {
        // filter all the current username
        const currentUserName = queue[i][0]
        const currentUserPatterns = queue.filter((item) => item[0] === queue[i][0])
        // sort by timestamp
        currentUserPatterns.sort((a, b) => {
            if(a[2] < b[2]) {
                return -1
            }

            if(a[2] > b[2]) {
                return 1
            }

            return 0
        })
        console.log('currentUserPatterns', currentUserPatterns);
        let pattern = []
        for(let j = 0; j < currentUserPatterns.length; j++) {
            pattern.push(currentUserPatterns[j][1])
        }

        // Compute highest pattern
        if(pattern.length > 2) {
            const computeResult = computeHighestPattern(pattern, patternsAll, occurrencesAll)
            patternsAll = computeResult[0]
            occurrencesAll = computeResult[1]
        }

        queue = queue.slice(currentUserPatterns.length)
    }

    // we will need to implement lex check if occurrence is the same
    const highestOccurrence = Math.max(...occurrencesAll)
    let highestOccurrenceIndex = []
    occurrencesAll.forEach((item, index) => {
        if(item === highestOccurrence) {
            highestOccurrenceIndex.push(index)            
        }
    })

    if(highestOccurrenceIndex.length > 1) {
        let highestPattern = patternsAll[highestOccurrenceIndex[0]]
        for(let i = 0; i < highestOccurrenceIndex.length; i++) {
            if(patternsAll[highestOccurrenceIndex[i]].localeCompare(highestPattern) < 0) {
                highestPattern = patternsAll[highestOccurrenceIndex[i]]
            }
        }
        return highestPattern.split('-')
    } else {
        const highestIndex = occurrencesAll.indexOf(Math.max(...occurrencesAll))
        return patternsAll[highestIndex].split('-')
    }
};

// ["ldigebxndh","jxm","iit","ldigebxndh","dut","oxkr","dut","ldigebxndh","iit"]
// [246561774,336877562,613255786,581611682,67005296,164162280,644105652,998777950,962088025]
// ["kzx","bsmy","qhmiliihh","txvn","snf","nrtj","ksakw","bsmy","txvn"]