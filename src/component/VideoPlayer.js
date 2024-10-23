import React from 'react';
import { Link } from 'react-router-dom';
const VideoPlayer = () => {
  // Path to the video stored in the public folder
  // const videoSrc = process.env.PUBLIC_URL + '/savedVideos/video.mp4';
  const videoSrc = 'http://localhost:4000/videos/video.mp4';
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    {/* Heading */}
    <h1 className="text-3xl font-bold mb-4">Video Player</h1>

    {/* Video player container */}
    <div className="bg-white shadow-lg rounded-lg p-6">
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
        ⚠️ Video will be deleted in 5 min
      </p>

      {/* Go Back link */}
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="text-indigo-600 font-bold hover:underline hover:text-indigo-400"
        >
          ← Go Back
        </Link>
      </div>
    </div>
  </div>
  );
}

export default VideoPlayer;

