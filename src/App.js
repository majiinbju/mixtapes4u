import { useState, useEffect } from "react";
import "./App.css";
import Mixtape from "./components/Mixtape";
import SongCard from "./components/SongCard";
import SearchBar from "./components/SearchBar";

function App() {
  // Array of song objects
  const songsData = [
    {
      id: 1,
      title: "Wonderwall",
      artist: "Oasis",
      duration: "4:18",
      albumArt:
        "https://i1.sndcdn.com/artworks-imeYXD3rOfktHMzz-6UN2vw-t500x500.jpg",
    },
    {
      id: 2,
      title: "Something",
      artist: "The Beatles",
      duration: "3:03",
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
    },
    {
      id: 3,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      duration: "7:03",
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b273ce4f1737bc8a646c8c4bd25a",
    },
    {
      id: 4,
      title: "Hotel California",
      artist: "Eagles",
      duration: "6:30",
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b2734637341b9f507521afa9a778",
    },
    {
      id: 5,
      title: "Smells Like Teen Spirit",
      artist: "Nirvana",
      duration: "5:01",
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b273e175a19e530c898d167d39bf",
    },
  ];

  // New state for songs and loading
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addedSongs, setAddedSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // useEffect runs after component mounts
  useEffect(() => {
    // Simulate API call with setTimeout
    const fetchSongs = () => {
      setTimeout(() => {
        setSongs(songsData);
        setIsLoading(false);
      }, 1000); 
    };
    
    fetchSongs(); // Call the function!
  }, []); // Empty dependency array = run once on mount

  // Function to add or remove a song
  const toggleSong = (songId) => {
    if (addedSongs.includes(songId)) {
      // Remove
      setAddedSongs(addedSongs.filter((id) => id !== songId));
    } else {
      // Add it
      setAddedSongs([...addedSongs, songId]);
    }
  };

  // Filter songs based on search
  const filteredSongs = songs.filter((song) => {
    const query = searchQuery.toLowerCase();
    return (
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query)
    );
  });

  // Get full song objects for added songs
  const mixtapeSongs = songs.filter((song) => addedSongs.includes(song.id));

  return (
    <div className="App">
      <div className="main-content">
        <h1>Mixtapes4U</h1>
        <p className="counter">Songs in mixtape: {addedSongs.length}</p>

        <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        {isLoading ? (
          <div className="loading">
            <p>🎵 Loading songs...</p>
          </div>
        ) : (
          <div className="song-list">
            {filteredSongs.length > 0 ? (
              filteredSongs.map(song => (
                <SongCard
                  key={song.id}
                  id={song.id}
                  title={song.title}
                  artist={song.artist}
                  duration={song.duration}
                  albumArt={song.albumArt}
                  isAdded={addedSongs.includes(song.id)}
                  onToggle={toggleSong}
                />
              ))
            ) : (
              <p className="no-results">
                No songs found. Try a different search!
              </p>
            )}
          </div>
        )}
      </div>

      <div className="sidebar">
        <Mixtape songs={mixtapeSongs} onRemove={toggleSong} />
      </div>
    </div>
  );
}

export default App;