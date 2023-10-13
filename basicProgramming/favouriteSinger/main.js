process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    input = input.split('\n');
    process.stdout.write(getFavouriteSinger(input[1].split(' ')));
}

// Write your code here
function getFavouriteSinger(playlist) {
    const songsBySinger = {};
    playlist.forEach((singer) => {
        if (singer in songsBySinger) {
            songsBySinger[singer] += 1;
        } else {
            songsBySinger[singer] = 1;
        }
    });

    const maximumSongsNumberBySinger = Object.values(songsBySinger).sort((a, b) => b - a)[0];

    const singersWithMaximumNumberofSongs = Object.values(songsBySinger).filter((songs) => songs === maximumSongsNumberBySinger).length;
    
    return String(singersWithMaximumNumberofSongs);
}