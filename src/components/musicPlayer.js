import React, { useState , useRef } from 'react';
import './musicPlayer.css';
import audioUrls from '../audioUrls'; // Use relative path to audioUrls file


const songs = [
  {
    id: 1,
    title: 'Song',
    artist: 'Arijit singh',
    url: 'audioUrls.song1,',
    cover: 'jhumkasong.jpg'
  },
  {
    id: 2,
    title: 'Song 2',
    artist: 'Artist 2',
    url: 'song2.mp3',
    cover: 'jhumkasong.jpg'
  },
  // Add more songs as needed
];

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio());

  const currentSong = songs[currentSongIndex];

  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.src = currentSong.url;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true); // Auto-start next song
  };

  const playPreviousSong = () => {
    const nextIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true); // Auto-start previous song
  };

  return (
    <div className="music-player">
      <div className="song-details">
        <img className="cover" src={currentSong.cover} alt="Song Cover" />
        <div className="details">
          <h3>{currentSong.title}</h3>
          <p>{currentSong.artist}</p>
        </div>
      </div>
      <div className="controls">
        <button className="control-btn" onClick={playPreviousSong}>Previous</button>
        <button className="control-btn" onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button className="control-btn" onClick={playNextSong}>Next</button>
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default MusicPlayer;