const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};






// console.log(library.tracks.t01[key]);

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  for (const playlist of Object.values(library.playlists)) {
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  }
};
printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  for (const track of (Object.values(library.tracks))) {
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
};

printTracks();



// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let playlist = library.playlists[playlistId];
  console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  for (const track of playlist.tracks) {
    let trackDetails = library.tracks[track];
    console.log(`${trackDetails.id}: ${trackDetails.name} by ${trackDetails.artist} (${trackDetails.album})`);
  }

};

printPlaylist("p01");


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  let playlist = library.playlists[playlistId];
  let trackExists = false;
  
  for (const track of playlist.tracks) {
    if (track === trackId) {
      trackExists = true;
    }
  }

  if (trackExists === false) {
    playlist.tracks.push(trackId);
  }


};

addTrackToPlaylist("t03", "p01");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  let generatedStringId = generateUid();

  let newTrack = {
    id: generatedStringId,
    name: name,
    artist: artist,
    album: album
  };
 
  library.tracks[generatedStringId] = newTrack;

};

addTrack("Mess is mine", "Vance Joy", "Dream your Life");
addTrack("Lonely Cowboy", "KALEO", "Surface Sounds");

// adds a playlist to the library
const addPlaylist = function(name) {
  let generatedStringId = generateUid();

  let newPlaylist = {
    id: generatedStringId,
    name: name,
    tracks: []
  };

  library.playlists[generatedStringId] = newPlaylist;
 
};

addPlaylist("Road Trip Tunes");




// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search


const printSearchResults = function(query) {

};
printSearchResults();

