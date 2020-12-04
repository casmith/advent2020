const readfile = require('./readfile')
const check = rule => !!((rule.password[rule.rule[0]] === rule.char) ^ (rule.password[rule.rule[1]] === rule.char));

const rules = readfile('day2.txt')
	.map(line => line.split(" "))
	.map(a => ({rule: a[0].split("-").map(Number).map(n => n - 1), char: a[1][0], password: a[2]}));
	
console.log(rules.filter(check).length);
