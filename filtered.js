var fs = require("fs")
var path = require("path")

fs.readdir(process.argv[2], function(err, files){
    for(var i=0;i<files.length;i++){
        var file_ext = path.extname(files[i]).substring(1)
        if(file_ext==process.argv[3]){
            console.log(files[i])
        }
    }
    
})