//Matrix generation
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

const tool1 = tools.firstChild;
tool1.textContent = "AXE";
tool1.className = "tool tool1";
const tool2 = tool1.nextSibling;
tool2.textContent = "PICKAXE";
tool2.className = "tool tool2";
tool2.nextSibling.textContent = "SHOVEL";
tool2.nextSibling.className = "tool tool3";

//--------------------- Inventory ---------------------------

const inventory = document.querySelector(".inventory");
for (let r = 0; r < 6; r++) {
  let item = document.createElement("div");
  item.className = "inventory-item";
  inventory.appendChild(item);
}
