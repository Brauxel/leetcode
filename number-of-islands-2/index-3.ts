function numIslands2(m: number, n: number, positions: number[][]): number[] {
    const ans = new Array()
    const land2id = new Map()
    let num_islands = 0;
    let island_id = 0

    for (const pos of positions) {
        const r = pos[0]
        const c = pos[1]
        const overLap = new Set()

        if(r - 1 >= 0 && land2id.has((r - 1) * n + c)) {
            overLap.add(land2id.get((r - 1) * n + c))
        }
        if(r + 1 < m && land2id.has((r + 1) * n + c)) {
            overLap.add(land2id.get((r + 1) * n + c))
        }
        if(c - 1 >= 0 && land2id.has(r * n + c - 1)) {
            overLap.add(land2id.get(r * n + c - 1))
        }
        if(c + 1 < n && land2id.has(r * n + c + 1)) {
            overLap.add(land2id.get(r * n + c + 1))
        }

        if(overLap.size > 0) {
            num_islands++
            land2id.set(r * n + c, island_id++)
        } else if(overLap.size === 1) {
            land2id.set(r * n + c, overLap.values().next)
        } else {
            const root_id = overLap.values().next

            for (const [key, value] of Object.entries(land2id)) {
                if(overLap.has(value)) {
                    land2id.set(key, root_id)
                }
                land2id.set(r * n + c, root_id)
                num_islands -= (overLap.size - 1)
            }
        }
        ans.push(num_islands)
    }

    return ans
};