/*
This is the simple version of Shortest Code series.
If you need some challenges, please try the challenge version

Task:
Give you an number array arr, and a number n(n>=0),
In accordance with the rules of kata, returns the array after n times changes .

Rules: In every time of change, when the element of array is an odd number,
it changed by x*3+1(element is x), and merge with next element arr[i]+arr[i+1]
(i is index of element, if it's the last element of array, do not merge with other element);
when the element is a even number, changed by x=x/2,and split to two element.

Example:

    arr=[3,4,5]
    n=0: [3,4,5]
    n=1: [14,16]
    element1=>3*3+1==10, then merge element2, 10+4=14;
    element2 merged by element1, so element2 disappeared;
    element3=>5*3+1==16, no element merge
    n=2: [7,7,8,8]
    element1 split into 7,7; element1 split into 8,8;
    n=3: [29,4,4,4,4]
    n=4: [92,2,2,2,2,2,2]
    n=5: [46,46,1,1,1,1,1,1,1,1,1,1,1,1]
    n=6: [23,23,23,23,5,5,5,5,5,5]
    n=... [...]
*/
function changeArray(arr, n) {
    for (let i = 0; i < n; i++) {
        const temp = [];
        let j = 0;

        while (j < arr.length) {
            if (arr[j] % 2 === 1) {
                const newValue = arr[j] * 3 + 1;
                if (j < arr.length - 1) {
                    temp.push(newValue + arr[j + 1]);
                    j += 2;
                } else {
                    temp.push(newValue);
                    j++;
                }
            } else {
                temp.push(arr[j] / 2, arr[j] / 2);
                j++;
            }
        }

        arr = temp
    }

    return arr;
}