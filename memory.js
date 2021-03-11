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
//adding eventlistiner for the tiles and the buttons
document.getElementById("start").addEventListener("click", startGame);
document.getElementById("reset").addEventListener("click", resetGame);
document.getElementById("tile1").addEventListener("click", () => {
  tiles("tile1");
});

//Function that resets the tiles
resetVarSallow = () => {
  lastColoe = "";
  click = 0;
  clickedTitleArray = [];
  isDuplicate = false;
  isGameStart = true;
  for (let i = 1; i < 11; i++) {
    let elem = "tile" + i;
    document.getElementById(elem).style.backgroundColor = "green";
  }
};

startGame = () => {
  resetVarSallow();
};

resetGame = () => {
  resetVarSallow();
};

tiles = (tile) => {};
