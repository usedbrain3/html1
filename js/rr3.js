var song = "Never gonna";
var lyrics = "";
var earworm = 4;

while (earworm > 0) {
lyrics = lyrics + song + " give you up <br>";
lyrics = lyrics + song;
lyrics = lyrics + " make you cry<br>";

if (earworm > 1) {
lyrics = lyrics + song + " desert you</p><hr>"
}
else {
lyrics = lyrics + song + "<strong> play this song again!!!!!</strong> <br>"
}

earworm = earworm - 1;

}
document.write(lyrics);