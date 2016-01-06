var http = require("http")
var concatStream = require("concat-stream")

http.get(process.argv[2], function(res){
    res.on("err", function(e){
        console.log("Error occured: "+e.message)
    })
    res.pipe(concatStream(function(data){
        console.log(data.toString())
        http.get(process.argv[3], function(res2){
            res2.on("err", function(e2){
                console.log("Error occured: "+e2.message)
            })
            res2.pipe(concatStream(function(data2){
                console.log(data2.toString())
                http.get(process.argv[4], function(res3){
                    res3.on("err", function(e3){
                        console.log("Error occured: "+e3.message)
                    })
                    res3.pipe(concatStream(function(data3){
                        console.log(data3.toString())
                    }))
                })
            }))
        })
    }))
})