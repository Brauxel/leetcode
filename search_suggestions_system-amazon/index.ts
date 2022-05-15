function suggestedProducts(products: string[], searchWord: string): string[][] {
    let searchResults = []
    products.sort()
    for (let i = 0; i < searchWord.length; i++) {
        const prefix = searchWord.substring(0, i + 1)

        let newProducts = [...products]
        let results = []
        while(newProducts.length > 0 && results.length < 3) {
            const resultIndex = newProducts.findIndex((product) => product.substring(0, i + 1) == prefix)

            if(resultIndex > -1) {                
                results.push(newProducts[resultIndex])
                newProducts = newProducts.slice(resultIndex + 1)                
            } else {
                break
            }
        }

        searchResults.push(results)
    }

    return searchResults
};