function minimumPerimeter(area) {
    let smallestPerimeter = Infinity

    for (let width = 0; width <= Math.sqrt(area); width++) {
        if (area % width === 0) {
            const height = area / width
            const perimeter = 2 * (width + height)
            smallestPerimeter = Math.min(smallestPerimeter, perimeter)
        }
    }

    return smallestPerimeter
}

console.log(minimumPerimeter(81))