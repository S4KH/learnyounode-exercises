var map = require("through2-map")
var http = require("http")

http.createServer(function(req, res){
    
    if(req.method!='POST'){
        return res.end('Must be POST request\n')
    }
    
    req.pipe(map(function(data){
        return data.toString().toUpperCase()
    })).pipe(res)
}).listen(Number(process.argv[2]))