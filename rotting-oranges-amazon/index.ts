// The idea is, from all rotten orange, we do BFS and see how many seconds it would take to get all adjacent refresh oranges
function orangesRotting(grid: number[][]): number {   
    let queue = [];
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }
    
  
    // BFS
    const fourDis = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let seconds = 0;

    while (queue.length > 0) {
        let currentSize = queue.length;
        let newQueue = [];
		
        while(currentSize > 0) {
            let current = queue.shift();
			
            for(let dis of fourDis) {
                // push adjacent fresh organge
                const row = current[0] + dis[0];
                const col = current[1] + dis[1];
                if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length && grid[row][col] === 1) {
                    grid[row][col] = 3; // use 3 to indicate visited
                    newQueue.push([row, col]);
                }
            }
            currentSize --;
        }
        if (newQueue.length > 0) {
            seconds++;
            queue = newQueue;
            newQueue = [];
        }
    }
    
    // check if there is still fresh oranges left
    let hasFresh = false;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }
    
    return seconds;
};
