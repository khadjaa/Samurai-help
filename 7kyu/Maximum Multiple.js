/*
Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
*/
function maxMultiple(divisor, bound){
    let maxDiv = 0
    for(let i = divisor; i <= bound; i++) {
        if(i % divisor === 0) {
            maxDiv = i
        }
    }
    return maxDiv
}

console.log(maxMultiple(10,50))