'use strict';

module.exports = (filename) => {
	return require('fs').readFileSync(filename, 'utf-8').split(/\r?\n/);
};

