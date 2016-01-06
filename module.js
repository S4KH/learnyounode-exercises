module.exports = function(dir, extension, callback){
    var fs = require("fs")
    var path = require("path")
    fs.readdir(dir, function(err, files){
        if(err){
            return callback(err)
        }
        var filteredList=[]
        files.forEach(function(file){
            if(path.extname(file).substring(1) === extension){
                filteredList.push(file)
            }
        })
        return callback(null, filteredList)
    })
}