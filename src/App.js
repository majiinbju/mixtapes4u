import { useState } from "react";
import Mixtape from "./Mixtape";
import "./App.css";
import SongCard from "./SongCard";

function App() {
  // Array of song objects
  const songs = [
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

  // Track which songs are added
  const [addedSongs, setAddedSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

        <div className="search-container">
          <input
            type="text"
            placeholder="Search for songs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="clear-search-button"
            >
              ✕
            </button>
          )}
        </div>

        <div className="song-list">
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
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
      </div>

      <div className="sidebar">
        <Mixtape songs={mixtapeSongs} onRemove={toggleSong} />
      </div>
    </div>
  );
}

export default App;
