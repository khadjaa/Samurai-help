function raiseHands(step) {
    const result = [0, 0, 0];

    result[0] = step % 3;
    result[1] = Math.floor((step / 3) % 3);
    result[2] = Math.floor((step / 9) % 3);

    return result;
}

console.log(raiseHands(98))