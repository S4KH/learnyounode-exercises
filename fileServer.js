var http = require("http")
var fs = require("fs")

http.createServer(function(req, res){
    var src = fs.createReadStream(process.argv[3])
    src.pipe(res)
}).listen(process.argv[2])