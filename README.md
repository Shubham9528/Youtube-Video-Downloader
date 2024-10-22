# 🎥 YouTube Video Downloader App

This project is a **YouTube Video Downloader** that allows users to download YouTube videos by simply entering the link and choosing a resolution. Built with **React.js** on the frontend and **Node.js** on the backend, this application leverages the `youtube-dl` library to handle the video downloading process.


![image](https://github.com/user-attachments/assets/cd377bc5-2ec7-4817-ac0c-6b1fc97b125e)


![image](https://github.com/user-attachments/assets/1612b7e1-b24a-489c-93ff-ef23f489732b)

![image](https://github.com/user-attachments/assets/843c9ec0-1655-4daa-b543-74fc34b9abb4)

![image](https://github.com/user-attachments/assets/cbca66e7-d053-4216-aa80-e1291de0d128)

![image](https://github.com/user-attachments/assets/c67ed661-e716-44ac-bda4-a71864621cad)


---

## 🚀 Features

- **Download YouTube videos** at various resolutions (360p, 480p, 720p, 1080p).
- Displays a user-friendly interface for inputting video links.
- Video download progress and status notification.
- Option to view the downloaded video with an integrated video player.
- Auto-delete video files after 1 minute to manage disk space.
  
---

## 🛠️ Tech Stack

- **Frontend**: React, React Router
- **Backend**: Node.js, Express.js, Youtube-dl-exec
- **Other Libraries**: Axios, Tailwind CSS
- **Video Handling**: Youtube-dl, File System (`fs`) for handling video files

---

## 📂 Project Structure


---

## 🖥️ How It Works

1. **User Input**: Enter a YouTube video link and choose a resolution (360p, 480p, 720p, or 1080p).
2. **Video Download**: Upon submission, the video link is sent to the backend server, where the `youtube-dl-exec` library is used to download the video.
3. **View and Play**: After the download is complete, users can navigate to the video player page to view the downloaded video.
4. **Auto Delete**: The server automatically deletes the video file after 1 minute to conserve storage.

---

## 🔥 Use Cases

- **Download YouTube Videos**: Easily download videos in your desired resolution to your local machine.
- **Media Consumption**: Play downloaded videos using the integrated video player within the app.
- **Temporary Storage**: Ensures minimal storage use by auto-deleting downloaded videos after a set period.

---

## 📝 Code Explanation

### MainApp.js

This file is responsible for routing between different pages of the application using `react-router-dom`. It routes users to the **App.js** (main downloader) and **VideoPlayer.js** (video player) components.

```js
import React from "react";
import { Route, Routes } from 'react-router-dom';
import App from "./App";
import VideoPlayer from './component/VideoPlayer';

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

```

### 🎯 App.js

Handles user input, video link submission, and interaction with the backend server to start the video download. It also contains a form where users can input the YouTube link and choose the resolution.

#### Key states:

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



  






