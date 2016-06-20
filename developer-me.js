const fs = require('fs');
var chalk = require('chalk');
const _ = require('lodash');

function getDeveloperList() {
	const developersLocation = `${__dirname}/developer-list.json`;

	return new Promise((resolve, reject) => {
		fs.readFile(developersLocation, 'utf8', (error, payload) => {
			if (error) {
				reject(error);
			} else {
				resolve(JSON.parse(payload).developers);
			}
		});
	});
}

function storeDeveloperList(newDeveloperList) {
	const developersLocation = `${__dirname}/developer-list.json`;
	const developersJson = JSON.stringify({
		developers: newDeveloperList
	}, null, 2);

	return new Promise((resolve, reject) => {
		fs.writeFile(developersLocation, developersJson, 'utf8', (error, payload) => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
}

function logFirstDeveloper(developers) {
	const message = chalk.green(`Your tame developer is ${developers[0].name}`);
	console.log(message);

	return developers;
}

function moveFirstToLast(array) {
	return [
		..._.tail(array),
		_.head(array)
	];
}

function logError(error) {
	console.log(chalk.red(error));
}

module.exports = {
	getDeveloperList,
	storeDeveloperList,
	logFirstDeveloper,
	moveFirstToLast,
	logError
};