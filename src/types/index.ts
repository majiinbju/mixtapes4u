// Song type definition
export interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  albumArt: string;
}

// Context types
export interface MixtapeContextType {
  addedSongs: number[];
  toggleSong: (songId: number) => void;
}