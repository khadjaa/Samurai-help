/*
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W
e o
l r
l l
o d
A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be
*/
function transposeTwoStrings(arr) {
    const [str1, str2] = arr;
    const maxLength = Math.max(str1.length, str2.length);
    let result = '';

    for (let i = 0; i < maxLength; i++) {
        const char1 = str1[i] || ' '; // If str1 is shorter, use space
        const char2 = str2[i] || ' '; // If str2 is shorter, use space
        result += `${char1} ${char2}\n`;
    }

    return result;
}

// Test
const result = transposeTwoStrings(['Hello', 'World']);
console.log(result);