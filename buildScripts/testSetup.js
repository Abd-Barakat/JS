//transpile the code before run unit test.
require('babel-register');

//disable webpack features that mocka doesn't understand.
require.extensions['.css'] = function() {};