//--------------------- Matrix generation -------------------
const gameGridArr = [];
const gameGrid = document.querySelector(".game-world");
for (let r = 0; r < 20; r++) {
  let row = [];
  gameGridArr.push(row);
  for (let c = 0; c < 20; c++) {
    let cell = document.createElement("div");
    if (r > 13) {
      cell.className = "cell ground"; // draw ground
      // } else if (r == 13) {
      //   cell.className = "cell grass-top"; //draw grass-top ground
    } else {
      cell.className = "cell";
    }
    gameGrid.appendChild(cell);
    row.push(cell);
  }
}

//------------------- element generation --------------------
//grounf

const groundDefault = [13, 14, 15, 16, 17, 18, 19];
groundDefault.forEach(pair);

//tree-trunk
const treeTrunkDefault = [
  [10, 15],
  [11, 15],
  [12, 15],
];
treeTrunkDefault.forEach((pair) => {
  gameGridArr[pair[0]][pair[1]].className = "cell tree-trunk";
});
//tree-top
const treeTopDefault = [
  [6, 14],
  [6, 15],
  [6, 16],
  [7, 14],
  [7, 15],
  [7, 16],
  [8, 14],
  [8, 15],
  [8, 16],
  [9, 14],
  [9, 15],
  [9, 16],
];

treeTopDefault.forEach((pair) => {
  gameGridArr[pair[0]][pair[1]].className = "cell tree-top";
});

//cloud
const cloudDefault = [
  [3, 4],
  [3, 5],
  [3, 6],
  [4, 3],
  [4, 4],
  [4, 5],
  [4, 6],
  [4, 7],
];
cloudDefault.forEach((pair) => {
  gameGridArr[pair[0]][pair[1]].className = "cell cloud";
});
