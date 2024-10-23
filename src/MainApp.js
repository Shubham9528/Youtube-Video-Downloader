import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import App from "./App";
import VideoPlayer from './component/VideoPlayer';
export default function MainApp() { 

    const[time,setTime]=useState();
    return (
        <div>
        <Routes>
        <Route path="/" element={<App setTime={setTime} />} />
        <Route path="/download" element={<VideoPlayer  time={time}/>} />

    b     </Routes>
            
        </div>
    )
}