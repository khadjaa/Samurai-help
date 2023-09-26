/*
The main idea is to count all the occurring characters in a string.
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
function count(string) {
    const countOccurring = {}
    for (const char in string) {
        if (countOccurring[string[char]]) {
            countOccurring[string[char]]++
        } else {
            countOccurring[string[char]] = (countOccurring[char] || 0) + 1
        }
    }
    return countOccurring;
}

console.log(count('aba'))