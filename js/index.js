// Welcome page

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
        cell.className = "cell leaves-bush";
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
        cell.className = "cell leaves-bush";
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

//---------------- Tools Generation -------------------------

const tools = document.querySelector(".tools");
for (let r = 0; r < 4; r++) {
  let tool = document.createElement("div");
  tools.appendChild(tool);
}
const buttons = tools.firstChild;
const resetBtn = document.createElement("button");
buttons.className = "buttons";
resetBtn.textContent = "RESET";
resetBtn.className = "reset-button";
buttons.appendChild(resetBtn);

const quitBtnLink = document.createElement("a");
quitBtnLink.href = "./index.html";
quitBtnLink.className = "quit";
buttons.appendChild(quitBtnLink);

const quitBtn = document.createElement("button");
quitBtn.className = "quit-button";
quitBtn.textContent = "QUIT";
quitBtnLink.appendChild(quitBtn);

const axe = buttons.nextSibling;
axe.textContent = "AXE";
axe.className = "tool axe";
const pickAxe = axe.nextSibling;
pickAxe.textContent = "PICKAXE";
pickAxe.className = "tool pick-axe";
const shovel = pickAxe.nextSibling;
shovel.textContent = "SHOVEL";
shovel.className = "tool shovel";

//----------------- Inventory Generation --------------------

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
invGrassTop.className = "inventory-item inv-grass-top";
const invTreeTrunk = invGrassTop.nextSibling;
invTreeTrunk.textContent = 0;
invTreeTrunk.className = "inventory-item inv-tree-trunk";
const invLeavesBush = invTreeTrunk.nextSibling;
invLeavesBush.textContent = 0;
invLeavesBush.className = "inventory-item inv-leaves-bush";
const invCloud = invLeavesBush.nextSibling;
invCloud.textContent = 0;
invCloud.className = "inventory-item inv-cloud";
const invStone = invCloud.nextSibling;
invStone.textContent = 0;
invStone.className = "inventory-item inv-stone";

//--------------------- dynamics ---------------------------|

//------------ variables,arrays and objects---------------->

const toolPanel = document.querySelector(".tool-panel");
let itemClicked = 0; //

// Inventory object for storing removed cells by type

let counter = {
  invGround: 0,
  invGrassTop: 0,
  invTreeTrunk: 0,
  invLeavesBush: 0,
  invCloud: 0,
  invStone: 0,
};

// array to identify elements in the tool panel

const toolAndInvType = [
  axe,
  pickAxe,
  shovel,
  invGround,
  invGrassTop,
  invTreeTrunk,
  invLeavesBush,
  invCloud,
  invStone,
  resetBtn,
  quitBtn,
];

// -------------------- Functions --------------------->

//function for picking too/inventory item

function pickItem(e) {
  for (let i = 0; i < toolAndInvType.length; i++) {
    if (e.target === toolAndInvType[i]) {
      itemClicked = i + 1;
    }
  }
  if (itemClicked === 1) {
    if (e.target.className === "tool axe") {
      e.target.className = "tool axe-clicked";
      pickAxe.className = "tool pick-axe";
      shovel.className = "tool shovel";
    }
  }
  if (itemClicked === 2) {
    if (e.target.className === "tool pick-axe") {
      e.target.className = "tool pick-axe-clicked";
      axe.className = "tool axe";
      shovel.className = "tool shovel";
    }
  }
  if (itemClicked === 3) {
    if (e.target.className === "tool shovel") {
      e.target.className = "tool shovel-clicked";
      axe.className = "tool axe";
      pickAxe.className = "tool pick-axe";
    }
  }
  if (itemClicked > 3 && itemClicked < 10) {
    axe.className = "tool axe";
    pickAxe.className = "tool pick-axe";
    shovel.className = "tool shovel";
  }
  if (itemClicked === 10) {
    location.reload();
  }
}

toolPanel.addEventListener("click", pickItem);

//  function for moving tiles and storing their inventory in object

function handleTile(toolNum, invItem, objItem, cls) {
  gameGrid.addEventListener("click", (e) => {
    if (
      itemClicked === toolNum &&
      toolNum < 4 &&
      e.target.className == `cell ${cls}`
    ) {
      e.target.className = "cell";
      console.log(e.target, e.target.className);
      objItem++;
      counter[`${cls}`] = objItem;
      invItem.textContent = counter[`${cls}`];
      console.log(counter);
    } else if (
      itemClicked === toolNum &&
      toolNum > 3 &&
      counter[`${cls}`] != 0 &&
      e.target.className == "cell"
    ) {
      e.target.className = `cell ${cls}`;
      counter[`${cls}`] = counter[`${cls}`] - 1;
      invItem.textContent = counter[`${cls}`];
    }
  });
}

handleTile(1, invTreeTrunk, counter.invTreeTrunk, "tree-trunk");
handleTile(1, invLeavesBush, counter.invLeavesBush, "leaves-bush");
handleTile(2, invStone, counter.invStone, "stone");
handleTile(3, invGrassTop, counter.invGrassTop, "grass-top");
handleTile(3, invGround, counter.invGround, "ground");
handleTile(4, invGround, counter.invGround, "ground");
handleTile(5, invGrassTop, counter.invGrassTop, "grass-top");
handleTile(6, invTreeTrunk, counter.invTreeTrunk, "tree-trunk");
handleTile(7, invLeavesBush, counter.invLeavesBush, "leaves-bush");
handleTile(9, invStone, counter.invStone, "stone");
