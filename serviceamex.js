var Service = require('node-windows').Service;

var svc = new Service({
  name:'GoAndSeeAmex',
  description: 'Go and See Amex',
  script: 'E:\\GOANDSEE\\ServiceAmex\\helloserver.js',
  maxRetries : 3
});


svc.on('install',function(){
  svc.start();
  console.log('Service installed');
});

svc.on('alreadyinstalled',function(){
  console.log('Already installed');
});

svc.on('invalidinstallation',function(){
  console.log('Invalid installation');
});

svc.on('uninstall',function(){
  console.log('Service installed');
});

svc.on('start',function(){
  console.log('Service started');
});

svc.on('stop',function(){
  console.log('Service stoped');
});

svc.on('error',function(){
  console.log('Error with service');
});

svc.install();