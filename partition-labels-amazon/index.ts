function partitionLabels(s: string): number[] {
    const sizeOfTheParts = []
    let currentPartitionPointer = 0
    let i = 0
    while(i < s.length) {
        const lastIndexOfCurrentCharacter = s.lastIndexOf(s.charAt(i))        

        if(lastIndexOfCurrentCharacter === i && lastIndexOfCurrentCharacter >= currentPartitionPointer) {
            currentPartitionPointer = lastIndexOfCurrentCharacter
            sizeOfTheParts.push(computeTheSizeOfThePartFromPreviousEntries(sizeOfTheParts, currentPartitionPointer) + 1)
            i++;
            continue;
        }

        if(lastIndexOfCurrentCharacter === s.length - 1) {
            sizeOfTheParts.push(computeTheSizeOfThePartFromPreviousEntries(sizeOfTheParts,s.length))
            break;
        }

        if(lastIndexOfCurrentCharacter > currentPartitionPointer) {
            currentPartitionPointer = lastIndexOfCurrentCharacter
            i++
            continue;
        }
        
        if(i === currentPartitionPointer) {
            sizeOfTheParts.push(computeTheSizeOfThePartFromPreviousEntries(sizeOfTheParts, currentPartitionPointer) + 1)
            i = currentPartitionPointer + 1;
            continue
        }

        i++
    }
    return sizeOfTheParts
};

function computeTheSizeOfThePartFromPreviousEntries(sizeOfTheParts: number[], currentPartitionPointer) {
    if(sizeOfTheParts.length < 1) {
        return currentPartitionPointer
    }

    const totalSizeOfParts = sizeOfTheParts.reduce((prevValue, currentValue) => {
        return currentValue + prevValue
    }, 0)

    return currentPartitionPointer - totalSizeOfParts
    
}