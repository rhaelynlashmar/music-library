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
  },
  printPlaylists: function() {
    for (const playlist of Object.values(this.playlists)) {
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },
  printTracks: function() {
    for (const track of (Object.values(this.tracks))) {
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
  printPlaylist: function(playlistId) {
    let playlist = this.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    for (const track of playlist.tracks) {
      let trackDetails = this.tracks[track];
      console.log(`${trackDetails.id}: ${trackDetails.name} by ${trackDetails.artist} (${trackDetails.album})`);
    }
  
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    let playlist = this.playlists[playlistId];
    let trackExists = false;
    
    for (const track of playlist.tracks) {
      if (track === trackId) {
        trackExists = true;
      }
    }
  
    if (trackExists === false) {
      playlist.tracks.push(trackId);
    }
  },
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function(name, artist, album) {
    let generatedStringId = this.generateUid();
  
    let newTrack = {
      id: generatedStringId,
      name: name,
      artist: artist,
      album: album
    };
   
    this.tracks[generatedStringId] = newTrack;
  
  },
  addPlaylist: function(name) {
    let generatedStringId = this.generateUid();
  
    let newPlaylist = {
      id: generatedStringId,
      name: name,
      tracks: []
    };
  
    this.playlists[generatedStringId] = newPlaylist;
   
  },
};


library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist("t03", "p01");
console.log(library.playlists);
library.addTrack("Mess is mine", "Vance Joy", "Dream your Life");
library.addTrack("Lonely Cowboy", "KALEO", "Surface Sounds");
console.log(library.tracks);
library.addPlaylist("Road Trip Tunes");
console.log(library.playlists);





 