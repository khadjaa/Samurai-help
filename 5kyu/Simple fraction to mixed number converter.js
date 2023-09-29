/*
Given a string representing a simple fraction x/y, your function must return
a string representing the corresponding mixed fraction in the following format:

[sign]a b/c

where a is integer part and b/c is irreducible proper fraction.
There must be exactly one space between a and b/c. Provide [sign]
only if negative (and non zero) and only at the beginning of the
number (both integer part and fractional part must be provided absolute).

If the x/y equals the integer part, return integer part only.
If integer part is zero, return the irreducible proper fraction only.
In both of these cases, the resulting string must not contain any spaces.

Division by zero should raise an error (preferably,
the standard zero division error of your language).

Value ranges
-10 000 000 < x < 10 000 000
-10 000 000 < y < 10 000 000
Examples
Input: 42/9, expected result: 4 2/3.
Input: 6/3, expedted result: 2.
Input: 4/6, expected result: 2/3.
Input: 0/18891, expected result: 0.
Input: -10/7, expected result: -1 3/7.
Inputs 0/0 or 3/0 must raise a zero division error.
Note
Make sure not to modify the input of your function in-place, it is a bad practice.
*/
function greatestCommonDivisor(a, b) {
    return b === 0 ? a : greatestCommonDivisor(b, a % b);
}

function mixedFraction(s) {
    const [numerator, denominator] = s.split('/').map(Number);

    if (denominator === 0) {
        throw new Error('ZeroDivisionError');
    } else if (numerator % denominator === 0) {
        return (numerator / denominator).toString();
    } else {
        const whole = Math.trunc(numerator / denominator);
        const remainder = Math.abs(numerator % denominator);
        const common = greatestCommonDivisor(remainder, denominator);
        let reducedNumerator = remainder / common;
        let reducedDenominator = denominator / common;

        if (Math.abs(numerator) < Math.abs(denominator)) {
            if (reducedDenominator < 0) {
                reducedDenominator *= -1;
                reducedNumerator *= -1;
            }
            return `${reducedNumerator}/${reducedDenominator}`;
        } else {
            return `${whole} ${Math.abs(reducedNumerator)}/${Math.abs(reducedDenominator)}`;
        }
    }
}