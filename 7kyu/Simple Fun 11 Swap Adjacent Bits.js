/*
Examples
For n = 13, the output should be 14:

1310 = 11012 --> 11102 = 1410

For n = 74, the output should be 133:

7410 = 010010102 --> 100001012 = 13310

Input/Output
[input] integer n
 0 ≤ n < 2^30.

[output] an integer
*/
function swapAdjacentBits(n) {
    return parseInt(
        n
            .toString(2)
            .padStart(32, '0')
            .replace(/(\d)(\d)/g, '$2$1'),
        2
    );
}