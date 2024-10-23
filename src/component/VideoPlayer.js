import React from 'react';
import { Link } from 'react-router-dom';
const VideoPlayer = ({time}) => {
  // Path to the video stored in the public folder
  // const videoSrc = process.env.PUBLIC_URL + '/savedVideos/video.mp4';
  const videoSrc = 'http://localhost:4000/videos/video.mp4';
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Video Player</h1>

      {/* Video player container */}
      <div className="bg-white shadow-2xl rounded-3xl p-10 transform transition-transform hover:scale-105">
        <video
          src={videoSrc}
          controls
          width="600"
          className="rounded-lg border-2 border-gray-300"
        >
          Your browser does not support the video tag.
        </video>

        {/* Warning message */}
        <p className="mt-4 text-red-600 font-semibold text-center">
          ⚠️ Video will be deleted in {Math.floor(time / 60000)} min
        </p>

        {/* Go Back link */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-teal-500 font-bold hover:underline hover:text-teal-400 transition duration-300"
          >
            ← Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;

