var exec = require('child_process').exec;

var child = exec('meteor',{cwd: '/Users/IrvingGonzalez/Documents/Dev/Auditorias/WebApp'});

child.stdout.on('data', function(data) {
    console.log('Stdout [stdout]: ' + data);
});

child.stderr.on('data', function(data) {
    console.log('Stdout [error]: ' + data);
});

child.on('close', function(code) {
    console.log('Closing code: ' + code);
});