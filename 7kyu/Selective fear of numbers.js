/*
I've got a crazy mental illness. I dislike numbers a lot.
But it's a little complicated: The number I'm afraid of depends
on which day of the week it is...
This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week)
and an integer (number to be tested) so it tells
the doctor if I'm afraid or not. (return a boolean)
*/
var AmIAfraid = function(day, number){
    const afraidNumbers = {
        Monday: [12],
        Tuesday: num => num > 95,
        Wednesday: [34],
        Thursday: [0],
        Friday: num => num % 2 === 0,
        Saturday: [56],
        Sunday: num => num === 666 || num === -666,
    };

    if (afraidNumbers.hasOwnProperty(day)) {
        const check = afraidNumbers[day];
        if (typeof check === 'function') {
            return check(number);
        } else {
            return check.includes(number);
        }
    }

    return false;
}