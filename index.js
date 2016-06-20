#!/usr/bin/env node

const { getDeveloperList, storeDeveloperList, logFirstDeveloper, moveFirstToLast, logError } = require('./developer-me');

getDeveloperList()
	.then(logFirstDeveloper)
	.then(moveFirstToLast)
	.then(storeDeveloperList)
	.catch(logError);
