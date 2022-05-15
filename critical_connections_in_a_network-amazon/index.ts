// [[0,1],[1,2],[2,0],[3,4],[4,5],[5,3]]
// [0, [1, 2]], [1, [0, 2]], [2, [0, 1]], [3, [4, 5]], [4, [3, 5]], [5, [3, 4]]


function applyDFS(n: number, connections: number[][]): boolean {    
    if(connections.length < 1) {
        return null
    }

    let hasTraversedAllNodes = false
    const nodeConnectionsMap = new Map()

    for (const connection of connections) {
        const [a, b] = connection
        
        if(nodeConnectionsMap.has(a)) {
            const value = nodeConnectionsMap.get(a)
            nodeConnectionsMap.set(a, [...value, b])
        } else {
            nodeConnectionsMap.set(a, [b])
        }

        if(nodeConnectionsMap.has(b)) {
            const value = nodeConnectionsMap.get(b)
            nodeConnectionsMap.set(b, [...value, a])
        } else {
            nodeConnectionsMap.set(b, [a])
        }        
    }

    const topLevelNode = []
    for (const [key] of nodeConnectionsMap) {
        topLevelNode.push(key)
    }

    const isVisited = new Set()
    let queue = topLevelNode // [0, 1, 2, 3, 4, 5]
    let i = 0
    while(queue.length > 0) {
        let currentSize = queue.length // 6
        let newQueue = []

        while(queue.length > 0) {
            let current = queue.pop() // 5 // 4 // 3 // 2

            if(isVisited.has(current) || i === 0) { // no 5 // yes 4 // yes 3 // no 2
                isVisited.add(current) // [5] // [5, 3, 4, 2]
                const connectedNodes = nodeConnectionsMap.get(current) // [3, 4]
                for (const node of connectedNodes) {
                    isVisited.add(node) // [5, 3, 4]
                    newQueue.push(node) // [3, 4]
                }    
            }

            if(isVisited.size === n) { // false // false // false
                hasTraversedAllNodes = true
                break;
            }    

            if(newQueue.length > 0) {
                queue = newQueue
                newQueue = []
            }
    

            currentSize--;
        }
    }

    return hasTraversedAllNodes
};

function criticalConnections(n: number, connections: number[][]): number[][] {
    const criticalConnections = []

    let i = 0
    while(i < connections.length) {
        let interimConnections = [...connections]
        const removedItem = interimConnections.splice(i, 1)
        
        if(!applyDFS(n, interimConnections)) {
            criticalConnections.push(...removedItem)
        }
        i++
        
    }


    return criticalConnections
}