import { useMixtape } from '../context/MixtapeContext';

interface SongCardProps {
  id: number;
  title: string;
  artist: string;
  duration: string;
  albumArt: string;
}

function SongCard({ id, title, artist, duration, albumArt }: SongCardProps) {
  const { addedSongs, toggleSong } = useMixtape();
  
  const handleClick = (): void => {
    toggleSong(id);
  };

  const isAdded: boolean = addedSongs.includes(id);

  return (
    <div className="song-card">
      <img 
        src={albumArt} 
        alt={title}
        className="album-art"
      />
      <div className="song-info">
        <h3>{title}</h3>
        <p>{artist}</p>
        <span>{duration}</span>
      </div>
      <button 
        onClick={handleClick}
        className={isAdded ? 'button-added' : 'button-add'}
      >
        {isAdded ? '✓ Added' : '+ Add to Mixtape'}
      </button>
    </div>
  );
}

export default SongCard;