var http = require("http")
var urlM = require("url")

http.createServer(function(req, res){
    if(req.method==='GET'){
        var url = urlM.parse(req.url, true)
        var date = new Date(url.query['iso'])
        var ret = {}
        if(url.pathname==='/api/parsetime'){
            ret = JSON.stringify({"hour":date.getHours(), "minute":date.getMinutes(), "second":date.getSeconds()})
        }else{
            ret = JSON.stringify({"unixtime":date.getTime()})
        }
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(ret)
    }
}).listen(Number(process.argv[2]))