function reorderLogFiles(logs: string[]): string[] {
    const sortedLogs = logs.map((log) => {
        const indexOfFirstSpace = log.indexOf(' ')
        const id = log.substring(0, indexOfFirstSpace)
        const content = log.substring(indexOfFirstSpace + 1)
        const isDigit = !isNaN(parseInt(content[0]))

        return { id, log, content, isDigit }
    }).sort((a, b) => {
        // Place the letter logs before the digit logs
        if(a.isDigit === b.isDigit) {
            if(a.isDigit) {
                return 0
            } else {
                const result = a.content.localeCompare(b.content);
                return result === 0 ? a.id.localeCompare(b.id) : result;
            }
        } else {
            return a.isDigit ? 1 : -1
        }
    }).map((i) => i.log)
    
    return sortedLogs
};