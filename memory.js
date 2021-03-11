//Array with tiles
const tileArray = [
  "tile1",
  "tile2",
  "tile3",
  "tile4",
  "tile5",
  "tile6",
  "tile7",
  "tile8",
  "tile9",
  "tile10",
];
//The tiles colors used
const colorArray = ["red", "blue", "purple", "yellow", "black"];
//The correct tiles' color
let redArray = [];
let blueArray = [];
let purpleArray = [];
let yellowArray = [];
let blackArray = [];

//The last tile color clicked
let lastColor = "";

//Traking the clicks on the tiles
let click = 0;
//Array to store the tile that is clicked on
let clickedTitleArray = [];

//Boolean if the tiles are clicked with the same color
let isDuplicate = false;
//Boolean if the game isc start
let isGameStart = false;
