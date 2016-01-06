var mymodule = require('./module')
mymodule(process.argv[2], process.argv[3], function(err, datas){
    if(err){
        console.log(err)
    }else{
        datas.forEach(function(data){
            console.log(data)
        })
    }
    
})