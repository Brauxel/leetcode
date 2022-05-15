function maxDistance(grid: number[][]): number {
    let max = 0
    // Make a distance array
    const dist = grid.map(row => new Array(row.length).fill(Infinity))
    let hasLand = false
    let hasWater = false

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) {
                dist[i][j] = 0
                hasLand = true
            } else {
                hasWater = true
            }
        }
    }

    if(!hasLand || !hasWater) return -1

    // Proces the queue from top left
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 0) {
                // Find the distance to the nearest land cell
                dist[i][j] = 1 + Math.min(
                    dist[i - 1]?.[j] ?? Infinity,
                    dist[i + 1]?.[j] ?? Infinity,
                    dist[i][j - 1] ?? Infinity,
                    dist[i][j + 1] ?? Infinity,
                )
            }
        }
    }

    // Process the queue from bottom right
    // By this point, all our distances should be filled
    for (let i = grid.length - 1; i >= 0; i--) {
        for (let j = grid[0].length - 1; j >= 0; j--) {
            if(grid[i][j] === 0) {
                dist[i][j] = 1 + Math.min(
                    dist[i - 1]?.[j] ?? Infinity,
                    dist[i + 1]?.[j] ?? Infinity,
                    dist[i][j - 1] ?? Infinity,
                    dist[i][j + 1] ?? Infinity,
                )

                max = Math.max(max, dist[i][j])
            }
        }    
    }

    return max
};