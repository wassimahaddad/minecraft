# Structure

1. Landing Page 
   1.1 create page (image)
   1.2 create "start" button
2. The World
   2.1 create gameGrid and toolPanel (divs)
   ....2.1.1 create 20x20 Matrix in gameGrid (JS generated)
   ....2.1.1.1 create ground in Matrix
   ....2.1.1.2 create trees in Matrix
   ....2.1.1.3 create stone in Matrix
   ....2.1.1.4 create cloud in Matrix
   2.2 create toolPanel
   ....2.2.1 create tools and inventory(divs)  
   ....2.2.1.1 create Axe element(div)
   ....2.2.1.2 create PickAxe element(div)
   ....2.2.1.3 create shovel element(div)
   2.3 create Inventory (div/s and object/array of objects)
   ....2.3.1 element type
   ....2.3.2 element number / element number by type

# Event scenarios

1. tool is clicked (listener on tooPanel)
2. matrix is clicked (listener on gameGrid)
   2.1 ground is clicked
   ....2.1.1 ground is clicked with Axe
   ....2.1.2 ground is clicked with PickAxe
   ....2.1.3 ground is clicked with Shovel
   2.2 tree is clicked
   ....2.2.1 tree is clicked with Axe
   ....2.2.2 tree is clicked with PickAxe
   ....2.2.3 tree is clicked with Shovel
   2.3 stone is clicked
   ....2.3.1 stone is clicked with Axe
   ....2.3.2 stone is clicked with PickAxe
   ....2.3.3 stone is clicked with Shovel
   2.4 cloud is clicked
   ....2.4.1 cloud is clicked with Axe
   ....2.4.2 cloud is clicked with PickAxe
   ....2.4.3 cloud is clicked with Shovel
3. Inventory is clicked(listener on Inventory)
