function maxArea(h: number, w: number, horizontalCuts: number[], verticalCuts: number[]): Number {
    horizontalCuts.push(0, h);
    verticalCuts.push(0, w);

    horizontalCuts.sort((b, a) => b - a);
    verticalCuts.sort((b, a) => b - a);

    let maxHeight = 0, maxLength = 0;

    for (let i = 1; i < horizontalCuts.length; i++)
        maxHeight = Math.max(maxHeight, horizontalCuts[i] - horizontalCuts[i - 1]);

    for (let i = 1; i < verticalCuts.length; i++)
        maxLength = Math.max(maxLength, verticalCuts[i] - verticalCuts[i - 1]);

    const maxArea = BigInt(maxHeight) * BigInt(maxLength) % BigInt(1e9 + 7);
    return Number(maxArea);
};