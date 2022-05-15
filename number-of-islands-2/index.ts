function dfs (x, y, gridDfs, count = 0) {    
    const rowsLength = gridDfs.length
    const colsLength = gridDfs[0].length
    const directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]

    if(x < 0 || y < 0 || x >= rowsLength || y >= colsLength || gridDfs[x][y] === 0) {
        return count;
    }

    // mark as seen
    gridDfs[x][y] = 0
    /*
        grid [
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0]
    ]
    */

    // explore the neighbors   
    for (const d of directions) {
        dfs(x + d[0], y + d[1], gridDfs, count)
        count++
    }

    return count
}

function numIslands2(m: number, n: number, positions: number[][]): number[] {
    if(m === 1 && n === 1) {
        return [1]
    }

    const numberOfIslands = []

    /*
        m = 3, n = 3
        positions = [[0,0],[0,1],[1,2],[2,1]]
        [
            [0, 0, 0]
            [0, 0, 0]
            [0, 0, 0]
        ]
    */

    // Construct the grid
    let grid = []
    for (let i = 0; i < m; i++) {
        grid.push([])
        for (let j = 0; j < n; j++) {
            grid[i].push(0)
        }          
    }
    /*
        grid = [
            [ 0, 0, 0 ],
            [ 0, 0, 0 ],
            [ 0, 0, 0 ]
        ]
    */

        // positions = [[0,0],[0,1],[1,2],[2,1]]
    for (let i = 0; i < positions.length; i++) { // 0        
        const currentChangePosition = positions[i] // [0, 0]
        grid[currentChangePosition[0]][currentChangePosition[1]] = 1 // grid[0][0] = 1
        /*
        ----
        i = 0
        grid = [
            [ 1, 0, 0 ],
            [ 0, 0, 0 ],
            [ 0, 0, 0 ]
        ]
        ----
        */

        let gridCopy = JSON.parse(JSON.stringify(grid))
        dfs(currentChangePosition[0], currentChangePosition[1], gridCopy)
        
        let islandCount = 0
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if(grid[i][j] === 1) {
                    islandCount = dfs(currentChangePosition[0], currentChangePosition[1], gridCopy)                    
                }
                console.log('islandCount', islandCount);                
            }          
        }

        
        

        // // run the dfs here to calculate the islands
        // let gridCopy = JSON.parse(JSON.stringify(grid))
        // dfs(currentChangePosition[0], currentChangePosition[1], gridCopy)
        // islandCount++

        // if(islandCount > 0) {
        //     numberOfIslands.push(islandCount)
        // }
    }

    console.log('grid', grid);

    let islandCount = 0 // 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            
            let gridCopy = JSON.parse(JSON.stringify(grid)) 
            if(grid[i][j] === 1) {
                dfs(i, j, gridCopy)
                islandCount++
            }       
        }           
    }
    

    return numberOfIslands
};