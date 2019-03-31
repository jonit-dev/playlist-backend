var PORT = process.env['PORT'] || 5000;


var app = require('./lib/app.js')();


console.log("Running @ http://localhost:"  + PORT + ". Press ^C to Terminate.");
app.listen(PORT);