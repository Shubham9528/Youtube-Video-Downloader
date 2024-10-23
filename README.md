# Getting Started with Create React App
# 🎥 YouTube Video Downloader App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project is a **YouTube Video Downloader** that allows users to download YouTube videos by simply entering the link and choosing a resolution. Built with **React.js** on the frontend and **Node.js** on the backend, this application leverages the `youtube-dl` library to handle the video downloading process.

## Available Scripts
---

In the project directory, you can run:
## 🚀 Features

### `npm start`
- **Download YouTube videos** at various resolutions (360p, 480p, 720p, 1080p).
- Displays a user-friendly interface for inputting video links.
- Video download progress and status notification.
- Option to view the downloaded video with an integrated video player.
- Auto-delete video files after 1 minute to manage disk space.

---

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
## 🛠️ Tech Stack

The page will reload when you make changes.\
You may also see any lint errors in the console.
- **Frontend**: React, React Router
- **Backend**: Node.js, Express.js, Youtube-dl-exec
- **Other Libraries**: Axios, Tailwind CSS
- **Video Handling**: Youtube-dl, File System (`fs`) for handling video files

### `npm test`
---

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
## 📂 Project Structure

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
---

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
## 🖥️ How It Works

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
1. **User Input**: Enter a YouTube video link and choose a resolution (360p, 480p, 720p, or 1080p).
2. **Video Download**: Upon submission, the video link is sent to the backend server, where the `youtube-dl-exec` library is used to download the video.
3. **View and Play**: After the download is complete, users can navigate to the video player page to view the downloaded video.
4. **Auto Delete**: The server automatically deletes the video file after 1 minute to conserve storage.

### `npm run eject`
---

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
## 🔥 Use Cases

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
- **Download YouTube Videos**: Easily download videos in your desired resolution to your local machine.
- **Media Consumption**: Play downloaded videos using the integrated video player within the app.
- **Temporary Storage**: Ensures minimal storage use by auto-deleting downloaded videos after a set period.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
---

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
## 📝 Code Explanation

## Learn More
### MainApp.js

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
This file is responsible for routing between different pages of the application using `react-router-dom`. It routes users to the **App.js** (main downloader) and **VideoPlayer.js** (video player) components.

To learn React, check out the [React documentation](https://reactjs.org/).
```js
import React from "react";
import { Route, Routes } from 'react-router-dom';
import App from "./App";
import VideoPlayer from './component/VideoPlayer';

### Code Splitting
export default function MainApp() { 
    return (
        <div>
            <Routes>
                <Route path="/" element={<App  />} />
                <Route path="/download" element={<VideoPlayer  />} />
            </Routes>
        </div>
    )
}

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
```

### Analyzing the Bundle Size
### 🎯 App.js

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
Handles user input, video link submission, and interaction with the backend server to start the video download. It also contains a form where users can input the YouTube link and choose the resolution.

### Making a Progressive Web App
#### Key states:

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- **videoDetails**: Stores the video link and resolution selected by the user.
- **finalVideoPath**: Displays the download status.
- **showButton**: Controls the visibility of the "Go to file" button.

```js
function handleSubmit(e) {
  e.preventDefault();
  sendLink();
  setFinalVideoPath("Downloading...");
}



```


###  VideoPlayer.js

Once a video is downloaded, users are redirected to this page where the video is played using the HTML5 <video> tag. It displays a warning that the video will be deleted after 1 minute.

```js
function handleSubmit(e) {
<video src={videoSrc} controls width="600" />



```
### server.js
The Node.js backend serves the frontend and handles video download logic. It uses the youtube-dl-exec package to download YouTube videos and serves the video file to the frontend. The file is automatically deleted after 1 minute using fs.unlink.
```js
app.post('/download', async (req, res) => {
  const { link, resolution } = req.body;
  await videoDownload(link, resolution);
  res.json({ message: 'Download complete', downloadPath: finalVideoUrl });
});



```
###  🔧 Installation and Setup
  1.Clone the repository:
  ```js
git clone https://github.com/your-repo/YouTube-Downloader.git



```
