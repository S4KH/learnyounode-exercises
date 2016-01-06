var net = require("net")
var strftime = require("strftime")
var server = net.createServer(function(socket){
    var res = strftime("%Y-%m-%d %H:%M", new Date())
    console.log(res)
    socket.end(res)
})
server.listen(process.argv[2])