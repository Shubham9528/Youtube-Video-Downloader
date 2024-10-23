import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function App({setTime}) {
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
         setTime(res.data.time);
        if(res.data.message === "Download complete"){
          setShowButton(!showButton);
        }
         
          setVideoResponse(res.data.downloadPath);
          //  console.log(res.data.downloadPath);  // Log the message
              
      
      })
      .catch((err) => {
        console.error("Error sending video details:", err);
      });


      console.log(videoResponse);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
  <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10 transform transition-transform hover:scale-105">
    <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
      Download YouTube Videos
    </h1>
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="relative">
        <input
          name="link"
          onChange={handleChange}
          value={videoDetails.link}
          type="text"
          placeholder="Enter YouTube URL"
          required
          className="w-full p-4 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-teal-300"
        />
        <svg
          className="w-6 h-6 absolute top-4 left-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m0 0l-3 3m3-3l-3-3m15 3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Added text below the link input */}
      <p className="text-center text-gray-600 font-medium">Select video quality</p>

      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-700">Select Resolution</h3>
        <div className="grid grid-cols-2 gap-3">
          {["360", "480", "720", "1080"].map((res) => (
            <label
              key={res}
              className="flex items-center justify-center p-3 bg-gray-100 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer"
            >
              <input
                type="radio"
                name="resolution"
                value={res}
                checked={videoDetails.resolution === res}
                onChange={handleChange}
                required
                className="hidden"
              />
              <span
                className={`text-lg ${
                  videoDetails.resolution === res
                    ? "text-teal-500 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {res}p
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-teal-500 text-white font-bold rounded-full shadow-lg hover:bg-teal-600 transition-transform duration-300"
      >
        Download Video
      </button>
    </form>

    <div className="mt-8 text-center">
      <h3 className="text-gray-500 text-md">Download Status:</h3>
      <p className="text-lg font-semibold text-gray-700 mt-2">{finalVideoPath}</p>
    </div>

    {showButton && (
      <nav className="mt-6 text-center">
        <Link to="/download">
          <button className="py-3 px-8 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300">
            Go to File
          </button>
        </Link>
      </nav>
    )}
  </div>
</div>

  );
}

export default App;
