// const fs = require('fs');
// const path = require('path');
// const ytdl = require('ytdl-core');
// const ffmpeg = require('fluent-ffmpeg');




// exports.downloadVideo = async (req, res) => {
//     // console.log(path.join(__dirname));
//     const videoLik = req.body.url;

//     let videoID = ytdl.getURLVideoID(videoLik);
//     await ytdl.getInfo(videoID).then(console.log("Checking..."))
//     .then(info => {
//         console.log('Title: ' + info.videoDetails.title);
//         ytdl(videoLik).pipe(fs.createWriteStream(path.join(__dirname, `/video/${info.videoDetails.title}video.mp4`)));
//         convertMP4ToWav(path.join(__dirname, `video/${info.videoDetails.title}video.mp4`), info.videoDetails.title);
//     }); 

//     console.log("Downloading...");

// }

// // console.log(path.join(__dirname, `./video/${info.videoDetails.title}video.mp4`));
// ffmpeg.setFfmpegPath('C:/ffmpeg/bin/ffmpeg.exe')
// ffmpeg.setFfprobePath('C:/ffmpeg/bin/ffprobe.exe')
// ffmpeg.setFlvtoolPath('C:/ffmpeg/bin/ffplay.exe')


// const convertMP4ToWav = (videoNameInput, videoNameOutput) => {
   //     console.log("rrrrrrrrrrrrrrrrr",videoNameInput);
   //     ffmpeg()
   //     .input(videoNameInput)
   //     .output(videoNameOutput)
   //     .audioCodec('pcm_s16le')
//     .audioChannels(1)
//     .audioFrequency(44100)
//     .on('end', () => {
   //         console.log('Conversion complete!');
//     })
//     .on('error', (err) => {
   //         console.error('An error occurred: ', err.message);
   //     })
   //     .run();
   // }
   

   

   
   const fs = require('fs');
   const path = require('path');
   const ytdl = require('ytdl-core');
   const ffmpeg = require('fluent-ffmpeg');
   
   exports.downloadVideo = async (req, res, next) => {
      const videoLink = req.body.url;

      const createDate = new Date().toISOString();
      let videoID = ytdl.getURLVideoID(videoLink);

         await ytdl.getInfo(videoID)
         .then(console.log("Checking..."))
         .then(info => {
            console.log('Title: ' + info.videoDetails.title);
            ytdl(videoLink).pipe(fs.createWriteStream(path.join(__dirname, '../video/', info.videoDetails.title, "video.mp4")));
            console.log("Downloading...");
         }).catch (error => {
         console.log(error);
         
      })
      // await convertMP4ToWav(path.join(__dirname, `../video/${createDate}-video.mp4`));
   }
   
ffmpeg.setFfmpegPath('C:/ffmpeg/bin/ffmpeg.exe')
ffmpeg.setFfprobePath('C:/ffmpeg/bin/ffprobe.exe')
ffmpeg.setFlvtoolPath('C:/ffmpeg/bin/ffplay.exe')

const convertMP4ToWav = async (videoFilePath) => {
   // const audioOutputPath = path.join(__dirname, '../video/music_audio.wav');
   // const videoInputPath = path.join(__dirname, '../video', `/${new Date().toISOString()}music_vide.mp4`);
   // fs.readFile(path.join(__dirname, '../video/music_vide.mp4'))
   // console.log("Input File: ", videoFilePath);
   //  await ffmpeg()
   //      .input(path.resolve(videoFilePath))
   //      .output(audioOutputPath)
   //      .audioCodec('pcm_s16le')
   //      .audioChannels(1)
   //      .audioFrequency(44100)
   //      .on('end', () => {
   //         console.log('Conversion complete!'); 
   //       })
   //       .on('error', (err) => {
   //          console.error('An error occurred: ', err.message);
   //       })
   //       .run();
      }
      
      // convertMP4ToWav()


// const fs = require('fs');
// const path = require('path');
// const ytdl = require('ytdl-core');
// const ffmpeg = require('fluent-ffmpeg');
// ffmpeg.setFfmpegPath('C:/ffmpeg/bin/ffmpeg.exe')
// ffmpeg.setFfprobePath('C:/ffmpeg/bin/ffprobe.exe')
// ffmpeg.setFlvtoolPath('C:/ffmpeg/bin/ffplay.exe')

// exports.downloadVideo = async (req, res) => {
//     const videoLink = req.body.url;

//     let videoID = ytdl.getURLVideoID(videoLink);

//     const info = await ytdl.getInfo(videoID)
//     console.log('Title: ' + info.videoDetails.title);

//     const videoFilePath = path.join(__dirname, `./video/${info.videoDetails.title}video.mp4`);
//     await ytdl(videoLink).pipe(fs.createWriteStream(videoFilePath));
//     convertMP4ToWav(videoFilePath, info.videoDetails.title);
// }
// const convertMP4ToWav = (videoNameInput, videoNameOutput) => {
//     const audioOutputPath = path.join(__dirname, `./video/${videoNameOutput}audio.wav`);
//     ffmpeg()
//         .input(videoNameInput)
//         .output(audioOutputPath)
//         .audioCodec('pcm_s16le')
//         .audioChannels(1)
//         .audioFrequency(44100)
//         .on('end', () => {
//             console.log('Conversion complete!');
//         })
//         .on('error', (err) => {
//             console.error('An error occurred: ', err.message);
//         })
//         .run();
// }


// const fs = require('fs')
// const path = require('path')
// const ytdl = require('ytdl-core')
// const ffmpeg = require('fluent-ffmpeg')

// ffmpeg.setFfmpegPath('C:/ffmpeg/ffmpeg.exe')
// ffmpeg.setFfprobePath('C:/ffmpeg/ffprobe.exe')
// ffmpeg.setFlvtoolPath('C:/ffmpeg/ffplay.exe')

// const asyncYtdlPipe = (videoLink, videoFilePath) => {
//    console.log('Downloading...')
//    const pipe = ytdl(videoLink).pipe(fs.createWriteStream(videoFilePath))

//    console.log(videoFilePath, ';;;;;;;;;;;;;;;;;;;;;;');
//    return new Promise((resolve, reject) => {
//       pipe.on('finish', () => {
//          pipe.close()
//          console.log('Download finished! closing pipe...')
//          resolve()
//       })
//    })
// }

// const convertMP4ToWav = (videoNameInput, videoNameOutput) => {
//    const audioOutputPath = path.join(
//       __dirname,
//       `./audio/${videoNameOutput}-audio.wav`
//    )
//    console.log('Input File: ', videoNameInput)
//    console.log('Output File: ', audioOutputPath)
//    return new Promise((resolve, reject) => {
//       ffmpeg()
//          .input(videoNameInput)
//          .output(audioOutputPath)
//          .audioCodec('pcm_s16le')
//          .audioChannels(1)
//          .audioFrequency(44100)
//          .on('end', () => {
//             console.log('Conversion complete!')
//             resolve()
//          })
//          .on('error', (err) => {
//             console.error('An error occurred: ', err.message)
//             reject(err)
//          })
//          .run()
//    })
// }

// exports.downloadVideo = async (req, res) => {
//    const videoLink = req.body.url

//    let videoID = ytdl.getURLVideoID(videoLink)

//    let info = await ytdl.getInfo(videoID)

//    console.log('Title: ' + info.videoDetails.title)

//    const videoFilePath = path.join(__dirname, `./video/${info.videoDetails.title}-video.mp4`)

//    await asyncYtdlPipe(videoLink, videoFilePath)
//    console.log('ggggggggggg');
//    await convertMP4ToWav(videoFilePath, info.videoDetails.title)
// }