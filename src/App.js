import React from 'react';
import MusicPlayer from './components/musicPlayer';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <h1>React Music Player App</h1>
      <MusicPlayer />
    </div>
  );
};

export default App;
