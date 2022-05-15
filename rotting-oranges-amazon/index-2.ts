function orangesRotting(grid: number[][]): number {
    let seconds = 0

    let queue = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 2) {
                queue.push([i, j])
            }
        }
    }

    // BFS
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    while(queue.length > 0) {
        let currentSize = queue.length
        let newQueue = []
        
        while(currentSize > 0) {
            const currentElement = queue.shift()
            
            for (const d of directions) {
                const row = currentElement[0] + d[0]
                const col = currentElement[1] + d[1]

                if(row >= 0 && col >=0 && row < grid.length && col < grid[0].length && grid[row][col] === 1) {
                    // Mark it as visited
                    grid[row][col] = 3 // use 3 to indicate visited
                    newQueue.push([row, col])
                }
            }

            currentSize--;
        }
        if(newQueue.length > 0) {
            seconds++
            queue = newQueue
            newQueue = []
        }
    }

    // Check if there are fresh oranges left    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) {                
                return -1
            }
            
        }
        
    }

    return seconds
};