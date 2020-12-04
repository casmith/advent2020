'use strict';

const readfile = require('./readfile');

const grid = readfile("day3.txt").map(line => line.split(""));

const trySlope = (right, down) => {
	let x = 0, y = 0;
	const max = grid[0].length;

	const getNextPosition = (x, y) => {
		const newX = x + down;;
		const newY = (y + right) % max;
		return [newX, newY];
	}

	let trees = 0;
	let val = grid[x][y];

	if (val === '#') trees++;
	
	while (val) {
		[x,y] = getNextPosition(x, y);
		val = (!grid[x] || !grid[x][y]) ? null : grid[x][y];
		if (val === '#') trees++;
	}

	return trees
}


console.log([[1,1], [3,1], [5, 1], [7, 1], [1, 2]]
	.map(([right, down]) => trySlope(right, down))
 	.reduce((acc, next) => acc * next, 1)
)


