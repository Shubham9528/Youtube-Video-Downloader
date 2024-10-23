const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const path = require('path');
const youtubedl = require('youtube-dl-exec');
const logger = require('progress-estimator')();
const fs = require('fs');
const app = express();
const port = 4000;
let finalVideoUrl = "";
let outputPath="";
let time=600000;
// Enable CORS
app.use(cors()); // Use CORS middleware

//CORS (Cross-Origin Resource Sharing) is necessary in web applications when the frontend and backend are hosted on different origins (e.g., different domains, subdomains, or ports). The browser enforces the Same-Origin Policy, which restricts web pages from making requests to a different domain than the one that served the web page.

// Configure  middleware
app.use(bodyParser.json());//body-parser
app.use('/videos', express.static(path.resolve(process.cwd(), './savedVideos')));//storing videos on localhost 4000




// Async function to download video
async function videoDownload(videoUrl, resolution) {
    // const outputPath = path.resolve(`${__dirname}/savedVideos`, 'video.mp4');
    outputPath = path.resolve(`${__dirname}/./savedVideos`, 'video.mp4');

    // console.log(`Video will be saved to: ${outputPath}`);
   
    // Use youtubedl an external library to download the video
    try {
        const promise = youtubedl(videoUrl, {
            output: outputPath,
            format: `bestvideo[height<=${resolution}]`,
            

        });
          
        const result = await logger(promise, `Obtaining ${videoUrl}`);
        finalVideoUrl = result;
        console.log('Download complete:', result);
    } catch (err) {
        console.error('Error downloading video:', err);
    }

}

// Route to handle video download request
app.post('/download', async (req, res) => {
    const { link, resolution } = req.body;

    console.log(`Received request to download video: ${link} at ${resolution}p resolution`);
     await videoDownload(link, resolution);

     res.json({ message: 'Download complete', downloadPath: finalVideoUrl, directory: __dirname, time:time });
    //  res.send({ message: 'Download complete', downloadPath: finalVideoUrl, directory: __dirname });

      // detete the video
    setTimeout(() => {
        fs.unlink(outputPath, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
          } else {
            console.log('File deleted:',`${__dirname}/public/savedVideos/video.mp4`);
          }
        });
      }, time); 


});

app.get('/', (req, res) => {
    res.send('<h1 style="text-align:center; font-family: Roboto;">Youtube Video Downloader Server is running... click <a href="http://localhost:3000">here</a> to view</h1>');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
