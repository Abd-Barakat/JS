var webpack = require('webpack');
var webpackConfig = require('../WebPack.config.prod');
var chalk = require('chalk');
/*eslint-disable no-console */
console.log(chalk.blue("build minification, this will take few seconds..."))
webpack(webpackConfig).run((err, status) => {
    if (err) {
        console.log(chalk.red(err));
    }
    const jsonState = status.toJson();
    if (jsonState.hasErrors) {
        jsonState.errors.map(error => console.log(chalk.red(error)));
    }
    if (jsonState.hasWarnings) {
        console.log(chalk.yellow('Webpack generate the followign warnings'));
        jsonState.warnings.map(warning => console.log(chalk.yellow(warning)));
    }
    console.log(chalk.blue(`Webpack status : ${status}`));
});