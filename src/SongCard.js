function SongCard(props) {
    const handleClick = () => {
        props.onToggle(props.id);
    };

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
                className={props.isAdded ? 'button-added' : 'button-add'}
            >
                {props.isAdded ? '✓ Added' : '+ Add to Mixtape'}
            </button>
        </div>
    );
}

export default SongCard;