import { createContext, useState, useContext } from 'react';

// Create the context
const MixtapeContext = createContext();

// Hook to use context
export const useMixtape = () => {
    const context = useContext(MixtapeContext);
    if (!context) {
        throw new Error('useMixtape must be used within MixtapeProvider');
    }
    return context;
};

// Provider component
export const MixtapeProvider = ({ children }) => {
    const [addedSongs, setAddedSongs] = useState([]);

    const toggleSong = (songId) => {
        if (addedSongs.includes(songId)) {
            setAddedSongs(addedSongs.filter((id) => id !== songId));
        } else {
            setAddedSongs([...addedSongs, songId]);
        };
    };

    const value = {
        addedSongs,
        toggleSong,
    };

    return (
        <MixtapeContext.Provider value={value}>
            {children}
        </MixtapeContext.Provider>
    )
};

export default MixtapeContext;