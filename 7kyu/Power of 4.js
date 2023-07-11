function powerOf4(n) {
    if (Number.isInteger(n) && n > 0) {
        while (n !== 1) {
            if (n % 4 !== 0) {
                return false;
            }
            n = n / 4;
        }
        return true;
    }
    return false;
}