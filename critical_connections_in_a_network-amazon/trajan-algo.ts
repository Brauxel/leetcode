// [[0,1],[1,2],[2,0],[3,4],[4,5],[5,3]]

function criticalConnections(n: number, connections: number[][]): number[][] {
    const adjList = {}
    for (let [x, y] of connections) {
        if(adjList[x]) adjList[x].push(y)
        else adjList[x] = [y]

        if(adjList[y]) adjList[y].push(x)
        else adjList[y] = [x]
    }
    // adjList = { 0: [1, 2], 1: [0, 2], 2: [1, 0],  3:[4, 5], 4: [3, 5], 5: [4, 3]} 

    const criticalEdges = []
    const times = {}
    let time = 0
    const dfs = (vertex, parent) => { // (0, null) // (1, 0) // (2, 1) // (2, 0)
        if(times[vertex] !== undefined) return times[vertex] // times[0] is undefined // times[1] is undefined // times[2] is undefined // times[2] is defined return 3
        const val = times[vertex] = time++ // val = times[0] = 1 // val = times[1] = 2 // val = times[2] = 3
        
        for (const toVertex of adjList[vertex]) { // 1. adjList[0] = [1, 2] // 2. adjList[1] = [0, 2] // 3. adjList[2] = [1, 0]
            if(toVertex === parent) continue // 1. 1 !== null // 2. 0 0==0, continue // 2. 2 !== 0 // 3. 1 === 1, continue // 3. 0 !== 1
            const next = dfs(toVertex, vertex) // 1. dfs(1, 0) = 3 // 2. dfs(2, 1) = 3 // 3. dfs(2, 0) = 3
            if(val < next) criticalEdges.push([vertex, toVertex]) // 3. 3 is not less than 3 false // 2. false // 1. 2 < 3, add to critical edges
            times[vertex] = Math.min(next, times[vertex]) // 3. times[2] = min(3, 3) = 3 // 2. 3 // 1. 2
        }
        return times[vertex] // return 3 // return 3 // return
    }    
    dfs(0, null)
    
    return criticalEdges
};