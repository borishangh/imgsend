const express = require('express')
const upload = require('express-fileupload')

const app = express()
app.use(upload())

app.get ('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post ('/', (req,res)=>{
    if(req.files){
        console.log(req.files)
        var file = req.files.file
        var filename = file.name
        console.log(filename)

        file.mv('./uploads/'+filename, (er)=>{
            if(er){
                console.log(er);
            }else{
                console.log('bingo')
            }
        })
    }
})

app.listen(5500)