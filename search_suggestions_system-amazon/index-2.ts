function suggestedProducts(products: string[], searchWord: string): string[][] {
    let searchResults = []
    products.sort()
    for (let i = 0; i < searchWord.length; i++) {
        const prefix = searchWord.substring(0, i + 1)
        
        const results = products.filter((product) => product.substring(0, i + 1) == prefix)

        if(results.length > 3) {
            searchResults.push(results.slice(0, 3))
        } else {
            searchResults.push(results)
        }

    }

    return searchResults
};