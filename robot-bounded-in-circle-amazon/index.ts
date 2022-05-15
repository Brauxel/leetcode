// N E S W
const combinations = [[0,1], [1,0], [0,-1], [-1,0]]

function isRobotBounded(instructions: string): boolean {
    /*
        Current Direction
            - As per the index in the combinations array
            - North = 0
            - East = 1
            - South = 2
            - West = 3
    */
    let currentDirection = 0
    let x = 0
    let y = 0
    let i = 0
    // GL
    while(i < instructions.length) {
        if(instructions.charAt(i) === 'G') {
            x += combinations[currentDirection][0]
            y += combinations[currentDirection][1]
        }

        if(instructions.charAt(i) === 'R') {
            currentDirection = currentDirection === 3 ? 0 : currentDirection + 1
        }

        if(instructions.charAt(i) === 'L') {
            currentDirection = currentDirection === 0 ? 3 : currentDirection - 1
        }

        i++;
    }

    // After one cycle, robot returns to initial position or doesn't face north
    return (x === 0 && y == 0) || currentDirection !== 0

};