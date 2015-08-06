var pm2 = require('pm2');

pm2.connect(function() {
  pm2.start({
    script    : 'helloserver.js',         
    exec_mode : 'fork',   
    cwd       : '/Users/IrvingGonzalez/Desktop/ServiceAmex'   //'E:\\GOANDSEE\\ServiceAmex  
  }, function(err, apps) {
    pm2.disconnect();
  });
});