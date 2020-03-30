var playlist = {
  arianaGrande: "seven", shawnMendez: "you", JustinBieber: "yummy"
}

var updatePlaylist = function(obj, artist, song){
 return Object.assign({}, obj, {[artist]: song})
 
}

console.log(updatePlaylist(playlist, "tyler", "breakFree"))