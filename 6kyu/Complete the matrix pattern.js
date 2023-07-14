/*
When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
Give you two number m(a positive integer with 5 digits) and n(a positive odd integer >= 3), make a n*n matrix pattern using the digits of m:

Main diagonal and Vice diagonal fill in the first digit
At this time the matrix is divided into four triangular areas

The top area fill in the second digit
The bottom area fill in the third digit
The left area fill in the fourth digit
The right area fill in the fifth digit
like this:

 When m = 12345 and n = 5, the matrix is:
1 2 2 2 1
4 1 2 1 5
4 4 1 5 5
4 1 3 1 5
1 3 3 3 1
Note: The result is a multiline string; Each row separated by "\n"; Each digit separated by a space; All inputs are valid.

Some examples:
makeMatrix(67890,3) should return:
6 7 6
9 6 0
6 8 6


makeMatrix(13579,7) should return:
1 3 3 3 3 3 1
7 1 3 3 3 1 9
7 7 1 3 1 9 9
7 7 7 1 9 9 9
7 7 1 5 1 9 9
7 1 5 5 5 1 9
1 5 5 5 5 5 1*/

function makeMatrix(m,n){
    let digits = String(m).split("").map(el=>+el);
    let arr = [];
    for (let i = 0; i < n; i++){
        let str = []
        for (let j = 0; j < n; j++){
            str.push(0)
        }
        arr.push(str)
    }
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if( i === j || i + j === n-1 ) {
                arr[i][j] = digits[0]
            }
            if (j>i && i+j < n-1) {
                arr[i][j] = digits[1]
            }
            if (j>i && i+j > n-1) {
                arr[i][j] = digits[4]
            }
            if (j<i && i+j < n-1) {
                arr[i][j] = digits[3]
            }
            if (j<i && i+j > n-1) {
                arr[i][j] = digits[2]
            }
        }
    }
    arr = arr.map(el => el.join(' '))
    return arr.join("\n") ;
}