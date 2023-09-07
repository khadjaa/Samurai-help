/*
Given an array arr of strings, complete the function
by calculating the total perimeter of all the islands.
Each piece of land will be marked with 'X' while the water
fields are represented as 'O'. Consider each tile
being a perfect 1 x 1 piece of land. Some examples for better visualization:

['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO']
which represents:

should return: "Total land perimeter: 24".

Following input:

['XOOO',
 'XOXO',
 'XOXO',
 'OOXX',
 'OOOO']
which represents:

should return: "Total land perimeter: 18"
*/
function landPerimeter(arr) {
    let perimeter = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'X') {

                if (i === 0 || arr[i - 1][j] === 'O') {
                    perimeter++;
                }

                if (i === arr.length - 1 || arr[i + 1][j] === 'O') {
                    perimeter++;
                }

                if (j === 0 || arr[i][j - 1] === 'O') {
                    perimeter++;
                }

                if (j === arr[i].length - 1 || arr[i][j + 1] === 'O') {
                    perimeter++;
                }
            }
        }
    }

    return `Total land perimeter: ${perimeter}`;
}