'use strict';

const grid = require('./readfile')("day3.txt").map(line => line.split(""));

let x = 0, y = 0;
const max = grid[0].length;

const getNextPosition = (x, y) => {
	const newX = x + 1;
	const newY = (y + 3) % max;
	return [newX, newY];
}

let trees = 0;
let val = grid[x][y];

if (val === '#') trees++;

while (val) {
	[x,y] = getNextPosition(x, y);
	if (!grid[x] || !grid[x][y]) break;
	val = grid[x][y];
	if (val === '#') trees++;
}

console.log(trees);
