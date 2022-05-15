/*
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
*/

function numIslands(grid: string[][]): number {
    let islandCount = 0
    const rowsLength = grid.length
    const colsLength = grid[0].length
    const directions = [
        [1, 0],
        [0, 1],
        [-1 ,0],
        [0, -1]
    ]

    const dfs = (x, y) => {
        if(x < 0 || y < 0 || x >= rowsLength || y >= colsLength || grid[x][y] === "0") {
            return;
        }

        // mark as seen
        grid[x][y] = "0"

        // get the neighbors
        for (const d of directions) {
            dfs(d[0] + x, d[1] + y)
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const element = grid[i][j];
            if(element === "1") {
                dfs(i, j)

                islandCount++
            }
            
        }
        
    }

    return  islandCount 
};