//------------------ Matrix generation ----------------------
const gameGridArr = [];
const gameGrid = document.querySelector(".game-world");

const generateWorld = () => {
  for (let r = 0; r < 20; r++) {
    let row = [];
    gameGridArr.push(row);
    for (let c = 0; c < 20; c++) {
      let cell = document.createElement("div");
      // draw ground
      if (r > 13) {
        cell.className = "cell ground";
        //draw grass-top ground
      } else if (r == 13) {
        cell.className = "cell grass-top";
        //draw tree-trunk
      } else if (c == 15 && (r == 10 || r == 11 || r == 12)) {
        cell.className = "cell tree-trunk";
        //draw tree-top
      } else if (
        (c == 14 || c == 15 || c == 16) &&
        (r == 9 || r == 8 || r == 7 || r == 6)
      ) {
        cell.className = "cell tree-top";
        //draw cloud
      } else if (
        (r == 3 && c == 4) ||
        (r == 3 && c == 5) ||
        (r == 3 && c == 6) ||
        (r == 4 && c == 2) ||
        (r == 4 && c == 3) ||
        (r == 4 && c == 4) ||
        (r == 4 && c == 5) ||
        (r == 4 && c == 6) ||
        (r == 4 && c == 7) ||
        (r == 5 && c == 3) ||
        (r == 5 && c == 4) ||
        (r == 5 && c == 5) ||
        (r == 5 && c == 6) ||
        (r == 5 && c == 7) ||
        (r == 5 && c == 8) ||
        (r == 6 && c == 5) ||
        (r == 6 && c == 6)
      ) {
        cell.className = "cell cloud";
        //draw stone
      } else if (
        r == 12 &&
        (c == 9 || c == 10 || c == 11 || c == 18 || c == 19)
      ) {
        cell.className = "cell stone";
        //draw bush
      } else if (
        (r == 11 && (c == 3 || c == 4 || c == 5)) ||
        (r == 12 && (c == 2 || c == 3 || c == 4 || c == 5 || c == 6))
      ) {
        cell.className = "cell bush";
        //draw background
      } else {
        cell.className = "cell";
      }
      gameGrid.appendChild(cell);
      row.push(cell);
    }
  }
};
generateWorld();

//----------------------- Tools ----------------------------

const tools = document.querySelector(".tools");
for (let r = 0; r < 3; r++) {
  let tool = document.createElement("div");
  tools.appendChild(tool);
}

const axe = tools.firstChild;
axe.textContent = "AXE";
axe.className = "tool axe";
const pickAxe = axe.nextSibling;
pickAxe.textContent = "PICKAXE";
pickAxe.className = "tool pick-axe";
const shovel = pickAxe.nextSibling;
shovel.textContent = "SHOVEL";
shovel.className = "tool shovel";

//--------------------- Inventory ---------------------------

const inventory = document.querySelector(".inventory");
for (let r = 0; r < 6; r++) {
  let invItem = document.createElement("div");
  inventory.appendChild(invItem);
}

const invGround = inventory.firstChild;
invGround.textContent = 0;
invGround.className = "inventory-item inv-ground";
const invGrassTop = invGround.nextSibling;
invGrassTop.textContent = 0;
invGrassTop.className = "inventory-item grass-top";
const invTreeTrunk = invGrassTop.nextSibling;
invTreeTrunk.textContent = 0;
invTreeTrunk.className = "inventory-item inv-tree-trunk";
const invGrass = invTreeTrunk.nextSibling;
invGrass.textContent = 0;
invGrass.className = "inventory-item inv-grass";
const invCloud = invGrass.nextSibling;
invCloud.textContent = 0;
invCloud.className = "inventory-item inv-cloud";
const invStone = invCloud.nextSibling;
invStone.textContent = 0;
invStone.className = "inventory-item inv-stone";

//--------------------- dynamics ---------------------------
let toolClicked = 0;
// Tool picked: AXE=1, PICKAXE=2, SHOVEL=3
tools.addEventListener("click", (e) => {
  if (e.target === axe) {
    toolClicked = 1;
  }
  if (e.target === pickAxe) {
    toolClicked = 3;
  }
  if (e.target === shovel) {
    toolClicked = 3;
  }
});
// Inventory object for storing removed cells by type
let counter = {
  invGround: 0,
  invGrassTop: 0,
  invTreeTrunk: 0,
  invGrass: 0,
  invCloud: 0,
  invStone: 0,
};
gameGrid.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (toolClicked === 1 && e.target.className == "cell tree-trunk") {
    e.target.className = "hidden";
    counter.invTreeTrunk++;
    invTreeTrunk.textContent = counter.invTreeTrunk;
  }
});
