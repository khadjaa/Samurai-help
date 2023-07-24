/*
* Define a function that removes duplicates from an
* array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

function distinct(a) {
    let seen = {};
    let result = [];

    for (let num of a) {
        if (!seen[num]) {
            seen[num] = true;
            result.push(num);
        }
    }

    return result;
}

console.log(distinct([1,2,2]))