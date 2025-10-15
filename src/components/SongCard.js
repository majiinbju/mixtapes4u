import { useMixtape } from '../context/MixtapeContext';

function SongCard(props) {
  const { addedSongs, toggleSong } = useMixtape();
  
  const handleClick = () => {
    toggleSong(props.id);
  };

  const isAdded = addedSongs.includes(props.id);

  return (
    <div className="song-card">
      <img 
        src={props.albumArt} 
        alt={props.title}
        className="album-art"
      />
      <div className="song-info">
        <h3>{props.title}</h3>
        <p>{props.artist}</p>
        <span>{props.duration}</span>
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