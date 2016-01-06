var concatStream = require("concat-stream")
var http = require("http")

http.get(process.argv[2], function(res){
    res.on("error", function(err){
        console.log("Error occured: "+err.message)
    })
    res.pipe(concatStream(function(data){
        console.log(data.toString().length)
        console.log(data.toString())
    }))
})