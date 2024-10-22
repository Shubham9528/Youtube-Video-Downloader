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

    b     </Routes>
            
        </div>
    )
}