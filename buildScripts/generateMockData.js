import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';


jsf.extend('faker', () => require('faker'));
let json = JSON.stringify(jsf(schema));
fs.writeFile("./src/API/db.json", json, function(err) {
    if (err) {
        console.log(chalk.red(err)); //eslint-disable-line no-console
    } else {
        console.log(chalk.green("Mocked data generated")); //eslint-disable-line no-console
    }
});