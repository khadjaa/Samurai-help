function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol / (normPrice * discount / 100))
}

console.log(dutyFree(17, 10, 500))