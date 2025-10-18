import { useState } from 'react';
import { useMixtape } from '../context/MixtapeContext';
import { Song } from '../types';

interface MixtapeProps {
  songs: Song[];
}

interface Notes {
  [key: number]: string;
}

function Mixtape({ songs }: MixtapeProps) {
  const [notes, setNotes] = useState<Notes>({});
  const { toggleSong } = useMixtape();

  const handleNoteChange = (songId: number, noteText: string): void => {
    setNotes({
      ...notes,
      [songId]: noteText
    });
  };

  if (songs.length === 0) {
    return (
      <div className="mixtape-empty">
        <p>💔 Your mixtape is empty. Start adding songs!</p>
      </div>
    );
  }

  return (
    <div className="mixtape">
      <h2>💕 Your Mixtape ({songs.length} songs)</h2>
      
      {songs.map(song => (
        <div key={song.id} className="mixtape-song">
          <div className="mixtape-song-info">
            <img src={song.albumArt} alt={song.title} className="mixtape-album-art" />
            <div>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
            <button 
              onClick={() => toggleSong(song.id)}
              className="remove-button"
            >
              ✕
            </button>
          </div>
          
          <textarea
            placeholder="Why does this song make you think of them? 💭"
            value={notes[song.id] || ''}
            onChange={(e) => handleNoteChange(song.id, e.target.value)}
            className="note-input"
          />
        </div>
      ))}
    </div>
  );
}

export default Mixtape;