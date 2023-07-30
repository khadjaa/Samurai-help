
/*
Given a time in a time format class, return it without year, month and day.

It should return a string including milliseconds with 3 decimals.

Example:

new Date(2016, 2, 8, 16, 42, 59)
//Should return:
"16:42:59,000"
*/

function addZero (time) {
    if (time <= 9) {
        return `0${time}`
    }
    return time
}

function convert(time){
    let milliseconds = time.getMilliseconds()

    if(milliseconds < 1) {
        milliseconds = `000`
    } else if (milliseconds <= 9){
        milliseconds = `00${milliseconds}`
    } else if (milliseconds >= 10 && milliseconds < 100){
        milliseconds = `0${milliseconds}`
    }

    return `${addZero(time.getHours())}:${addZero(time.getMinutes())}:${addZero(time.getSeconds())},${milliseconds}`
}

console.log(convert(new Date(2016, 2, 8, 1, 42, 59)))