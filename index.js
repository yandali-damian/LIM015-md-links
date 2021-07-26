// importando paquetes de node.js
const chalk = require('chalk');
const log = console.log;

module.exports = () => {
    // ...
};

log(chalk.red('Hello world!'));
log(chalk.blue('Hello') + ' World' + chalk.red('!'))


console.log(chalk.bold.rgb(10, 100, 200)('Hello!'));
console.log(chalk.bold.rgb(10, 100, 200)
    `Hello!`);
console.log(chalk `{bold.rgb(10,100,200) Hello!}`);

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);

const ctx = new chalk.Instance({ level: 0 });