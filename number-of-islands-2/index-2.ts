function dfs(x: number, y: number, grid: number[][], visited: boolean[][]) {
    const rowsLength = grid.length
    const colsLength = grid[0].length
    const directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]

    if(x < 0 || y < 0 || x >= rowsLength || y >= colsLength || grid[x][y] === 0 || visited[x][y]) {
        return
    }

    // Mark it as visited
    visited[x][y] = true;

    for (const d of directions) {
        dfs(d[0] + x, d[1] + y, grid, visited)
    }
}

function numIslands(grid: number[][]) {
    if(grid === null || grid.length == 0) {
        return 0;
    }

    if(grid.length === 1) {
        return 1
    }

    const rowsLength = grid.length
    const colsLength = grid[0].length

    let visited = []
    for (let i = 0; i < rowsLength; i++) {
        visited.push([])
        for (let j = 0; j < colsLength; j++) {
            visited[i].push(false)
        }          
    }          

    let numOfIslands = 0
    for (let i = 0; i < rowsLength; i++) {
        for (let j = 0; j < colsLength; j++) {
            if(grid[i][j] == 1 && !visited[i][j]) {
                numOfIslands++
                dfs(i, j, grid, visited)
            }
            
        }
        
    }

    return numOfIslands
}

function numIslands2(m: number, n: number, positions: number[][]): number[] {
    let ans = new Array()
    // Construct the grid
    let grid = []
    for (let i = 0; i < m; i++) {
        grid.push([])
        for (let j = 0; j < n; j++) {
            grid[i].push(0)
        }          
    }    

    for (const pos of positions) {
        grid[pos[0]][pos[1]] = 1
        ans.push(numIslands(grid))
    }

    return ans
};