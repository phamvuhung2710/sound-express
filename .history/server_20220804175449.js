const express = require('express');
const app = express();
const YoutubeMp3Downloader = require('youtube-mp3-downloader');

const path = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);

const directoryPath = path.join(__dirname, 'output');

app.get('/', (req, res) => {
  let result;
  (async () => {
    const res = await readdir(directoryPath);
    console.log(res);
  })();

  res.send(result);
});

app.post('/', (req, res) => {
  res.send('OK');
});

app.get('/download', (req, res) => {
  var YD = new YoutubeMp3Downloader({
    ffmpegPath: './ffmpeg/bin/ffmpeg.exe', // FFmpeg binary location
    outputPath: './output', // Output file location (default: the home directory)
    youtubeVideoQuality: 'highestaudio', // Desired video quality (default: highestaudio)
    queueParallelism: 2, // Download parallelism (default: 1)
    progressTimeout: 2000, // Interval in ms for the progress reports (default: 1000)
    allowWebm: false, // Enable download from WebM sources (default: false)
  });

  //Download video and save as MP3 file
  YD.download('PvTHRMLE3W4');

  YD.on('finished', function (err, data) {
    console.log('result: ', JSON.stringify(data));
    res.send('Thành công');
  });

  YD.on('error', function (error) {
    console.log('error: ', error);
  });

  YD.on('progress', function (progress) {
    console.log(JSON.stringify(progress));
  });
});

app.listen(3000, () => {
  console.log(`Server started running`);
});
