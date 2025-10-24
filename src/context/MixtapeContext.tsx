import { createContext, useState, useContext, ReactNode } from 'react';
import { MixtapeContextType } from '../types';

const MixtapeContext = createContext<MixtapeContextType | undefined>(undefined);

export const useMixtape = (): MixtapeContextType => {
  const context = useContext(MixtapeContext);
  if (!context) {
    throw new Error('useMixtape must be used within MixtapeProvider');
  }
  return context;
};

interface MixtapeProviderProps {
  children: ReactNode;
}

export const MixtapeProvider = ({ children }: MixtapeProviderProps) => {
  const [addedSongs, setAddedSongs] = useState<number[]>([]);

  const toggleSong = (songId: number): void => {
    if (addedSongs.includes(songId)) {
      setAddedSongs(addedSongs.filter((id) => id !== songId));
    } else {
      setAddedSongs([...addedSongs, songId]);
    }
  };

  const value: MixtapeContextType = {
    addedSongs,
    toggleSong,
  };

  return (
    <MixtapeContext.Provider value={value}>
      {children}
    </MixtapeContext.Provider>
  );
};