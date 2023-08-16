/*
You will be given an array of events, which are represented by strings.
The strings are dates in HH:MM:SS format.

It is known that all events are recorded in chronological order
 and two events can't occur in the same second.

Return the minimum number of days during which the log is written.

Example:

Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]
Output -> 1

Input -> ["12:12:12"]
Output -> 1

Input -> ["12:00:00", "23:59:59", "00:00:00"]
Output -> 2

Input -> []
Output -> 0
*/
function checkLogs(log) {
    if (log.length === 0) {
        return 0;
    }

    let currentDay = 1;
    let lastEvent = log[0];

    for (let i = 1; i < log.length; i++) {
        const currentTime = new Date(`1970-01-01T${log[i]}`);
        const lastTime = new Date(`1970-01-01T${lastEvent}`);

        if (currentTime.getTime() > lastTime.getTime()) {
            lastEvent = log[i];
        } else {
            currentDay++;
            lastEvent = log[i];
        }
    }

    return currentDay;
}

console.log(checkLogs(["12:00:00", "23:59:59", "00:00:00"]))