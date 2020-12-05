/*

Part 2

Ding! The "fasten seat belt" signs have turned on. Time to find your seat.

It's a completely full flight, so your seat should be the only missing boarding pass in your list. However, there's a catch: some of the seats at the very front and back of the plane don't exist on this aircraft, so they'll be missing from your list as well.

Your seat wasn't at the very front or back, though; the seats with IDs +1 and -1 from yours will be in your list.

*/

'use strict';

const input = "FBFBBFFRLR";

const newRange = (start, end, letter) => {
    if (letter === 'F' || letter === 'L') {   // lower half
        return [start, start + Math.floor((end - start) / 2)];
    } else {                // upper half
        return [start + Math.ceil((end - start) / 2), end];
    }
}

const findRow = (input) => {
    let start = 0, end = 127;
    for (let i = 0; i < 7; i++) {
        [start, end] = newRange(start, end, input[i]);
    }
    return start;
}

const findSeat = (input) => {
    let start = 0, end = 7;
    for (let i = 7; i < 10; i++) {
        [start, end] = newRange(start, end, input[i]);
    }
    return start;
}

const getSeatId = (row, col) => (row * 8) + col;
const solve = (input) => input ? getSeatId(findRow(input), findSeat(input)) : 0;
const lines = require('./readfile')('day5.txt');
const seats = lines.map(solve).sort((x, y) => x - y);

for (let i = 1; i < seats.length; i++) {
    const prev = seats[i - 1], curr = seats[i], next = seats[i + 1];
    if (curr - prev === 1 && next - curr == 2) { // found the missing seat
         console.log(curr + 1);
    }
}

