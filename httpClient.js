var http=require("http")
http.get(process.argv[2], function(res){
    res.setEncoding("utf8")
    res.on("error", function(e){
        console.log('Error occured: '+e.message)
    })
    res.on("data", function(chunk){
        console.log(chunk)
    })
})