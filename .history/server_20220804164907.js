// import express from 'express';
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

// app.post('/', (req, res) => {
//   console.log('req: ', req);
//   res.send('OK');
// });

// app.listen(3000, () => {
//   console.log(`Server started running`);
// });

var ffmpeg = require('fluent-ffmpeg')

var args = process.argv.slice(2)

function baseName(str){
    var base = new String(str).substring(str.lastIndexOf('/') + 1)
    if(base.lastIndexOf(".") != -1){
        base = base.substring(0,base.lastIndexOf("."))
    }

    return base;
}

args.forEach(function(val,index,array){
    var filename = val

    console.log(val)

    var basename = baseName(filename)

    console.log(basename)

    ffmpeg(filename)
    .toFormat('mp3')
    .saveToFile('audio.mp3',(stdout,stderr) => {

    })

    .on('error',function(err){
        console.log(err)
    })
    .on('progress',function(progress){
        console.log('... frmaes ' + progress.frames)
    })
    .on('end',function(){
        console.log('Finished processing')
    })
    .run()
})
})()