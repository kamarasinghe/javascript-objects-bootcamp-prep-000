var playlist = {
  artistName: 'Song Title'
};

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist, { [artistName]: songTitle });
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}