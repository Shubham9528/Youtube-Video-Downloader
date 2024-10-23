import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function App() {
  // Link and resolution state
  const [videoDetails, setVideoDetails] = useState({
    link: "",
    resolution: "360",
  });
  const [finalVideoPath, setFinalVideoPath] = useState("");  // Add state for finalVideoPath
  const [showButton, setShowButton] = useState(false);//toggle for video view button
  // Handle input changes for both link and resolution
  const [videoResponse,setVideoResponse]=useState();
 
  
  function handleChange(e) {
    const { name, value } = e.target;
    setVideoDetails(prevDetails => ({
      ...prevDetails, // Keep the previous state
      [name]: value,  // Update the state with new value
    }));
  }
  
  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    // Call the sendLink function to post the data to the server
    sendLink();
    setFinalVideoPath("Processing your request...");
  }

  // Send video link and resolution via Axios to the backend
  function sendLink() {
    axios.post("http://localhost:4000/download", videoDetails)
      .then((res) => {
        setFinalVideoPath(res.data.message);  // Use setFinalVideoPath to update the state
        // path=res.data.downloadPath;
          setShowButton(!showButton);
          setVideoResponse(res.data.downloadPath);
          //  console.log(res.data.downloadPath);  // Log the message
              
      
      })
      .catch((err) => {
        console.error("Error sending video details:", err);
      });


      console.log(videoResponse);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-indigo-600 mb-6">YouTube Video Downloader</h1>
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="link"
            onChange={handleChange}
            value={videoDetails.link}
            type="text"
            placeholder="Enter YouTube link"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="resolution"
                value="360"
                checked={videoDetails.resolution === "360"}
                onChange={handleChange}
                required
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <span className="text-gray-700">360p</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="resolution"
                value="480"
                checked={videoDetails.resolution === "480"}
                onChange={handleChange}
                required
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <span className="text-gray-700">480p</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="resolution"
                value="720"
                checked={videoDetails.resolution === "720"}
                onChange={handleChange}
                required
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <span className="text-gray-700">720p HD</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="resolution"
                value="1080"
                checked={videoDetails.resolution === "1080"}
                onChange={handleChange}
                required
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <span className="text-gray-700">1080p Full HD</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition duration-300"
          >
            Download
          </button>
        </form>

        <h3 className="mt-6 text-gray-700 text-center">Video status: {finalVideoPath}</h3>
        <nav className="mt-4 text-center">
          {showButton && (
            <Link to="/download">
              <button className="py-2 px-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-400 transition duration-300">
                Go to file
              </button>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

export default App;
