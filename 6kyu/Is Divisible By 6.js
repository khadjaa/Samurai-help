/*
Task
A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number s, find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.

Input/Output
[input] string s

A masked number.

1 ≤ inputString.length ≤ 10000.

[output] a string array

Sorted array of strings representing all non-negative integers that correspond to the given mask and are divisible by 6.

Example
For s = "1*0", the output should be ["120", "150", "180"].

For s = "*1", the output should be [].

For s = "1234567890123456789012345678*0",

the output should be

[
"123456789012345678901234567800",
"123456789012345678901234567830",
"123456789012345678901234567860",
"123456789012345678901234567890"]```
As you can see, the masked number may be very large ;-)
*/

function divisibleBy6(s){
    const results = [];
    for (let i = 0; i < 10; i++) {
        const num = s.replace("*", i.toString());
        if (isValidDivisibleBy6(num)) {
            results.push(num);
        }
    }
    return results;
}

function isValidDivisibleBy6(num) {
    if (num === "0") return true;
    if (num[num.length - 1] % 2 !== 0) return false;
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }
    return sum % 3 === 0;
}

console.log(divisibleBy6('1234567890123456789012345678*0'))
