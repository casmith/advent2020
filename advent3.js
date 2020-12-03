const readfile = require('./readfile');

const check = rule => {
	const result = count(rule.password, rule.char);
	return result >= rule.rule[0] && result <= rule.rule[1];
}

const count = (str, char) => (str.match(new RegExp(char, "g")) || []).length;

const rules = readfile('day3-4.txt')
	.map(y => y.split(" "))
	.map(a => ({rule: a[0].split("-").map(Number), char: a[1][0], password: a[2]}))
	

console.log(rules.filter(check).length);
