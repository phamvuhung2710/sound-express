import express from 'express';
const app = express();

const path = require('path');
const fs = require('fs');



app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/', (req, res) => {
  console.log('req: ', req.files);
  res.send('OK');
});

app.listen(3000, () => {
  console.log(`Server started running`);
});

// var YoutubeMp3Downloader = require('youtube-mp3-downloader');

// //Configure YoutubeMp3Downloader with your settings
// var YD = new YoutubeMp3Downloader({
//   ffmpegPath: './ffmpeg/bin/ffmpeg.exe', // FFmpeg binary location
//   outputPath: './output', // Output file location (default: the home directory)
//   youtubeVideoQuality: 'highestaudio', // Desired video quality (default: highestaudio)
//   queueParallelism: 2, // Download parallelism (default: 1)
//   progressTimeout: 2000, // Interval in ms for the progress reports (default: 1000)
//   allowWebm: false, // Enable download from WebM sources (default: false)
// });

// //Download video and save as MP3 file
// YD.download('pSFXJ7teisw');

// YD.on('finished', function (err, data) {
//   console.log('result: ', JSON.stringify(data));
// });

// YD.on('error', function (error) {
//   console.log('error: ', error);
// });

// YD.on('progress', function (progress) {
//   console.log(JSON.stringify(progress));
// });
