// Include http, and cluster module.
var http = require('http');
var cluster = require('cluster');
// There are totally 2 cpu in machine.
var numCPUs = require('os').cpus().length;;

// Create a http web server object.
var server = http.createServer(function (req, res) {

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World from worker process ' + process.pid);
        console.log('Process request worker pid is ' + process.pid);
    
})

// When app start.
if (cluster.isMaster) {
    // Print out the master pid.
    console.log('Master process id ' + process.pid)
    // Create worker process in cluster.
    for (var i = 0; i < numCPUs; i++) {
        // Invoke cluster fork method to create a cluster worker.
        var worker = cluster.fork();
        // Print out the worker pid.
        console.log('Worker ' + (i + 1) + ' process id ' + worker.process.pid);
    }
} else {
    // Make http web server listen on port 8000.
    server.listen(8000);
}
