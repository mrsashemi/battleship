# battleship

**Introduction**
The goal of the battleship project is to build an app via Test Driven Development. I created this app primarily with vanilla JS, a handful of lodash methods, and testing with Jest. 

**Functionality**
The page is loosely (stylistically and functionally) based on my tic-tac-toe project, with some styles pulled from my weather-app project. Functionally, it operates as a simple game of Battleship played against a computer and gives the player a few options in terms of the dimensions of the gameboard. 

Upon selecting the preferred dimensions, the user can then place their ships and is given the option to rotate the orientation of the ship. Ships are placed in order of size from largest (5 spaces) to smallest (2 spaces). 

Once the ships are placed, the user can either reset the game if unsatisfied with the placement or they can go ahead and begin the war. The user and the computer take turns selecting spaces on each others boards. If a selected space contains a ship, the space is set to "Blast" otherwise it is set to "missed".

Upon blasting all of the enemies ships, a winner is declared, and the user can reset the game. 

**Process**
Since the goal of this project was to practice Test Driven Development, I began by building a few factory functions into their own ES6 Modules and followed each factory function with testing in Jest. The factory functions contain properties that are objects generated by the other factory function, so I build them in the following order:

1) Ships.js
    a) Generates ship objects containing title properties, an array of where they are located on the board (hitLocation), the size of the ship (array length), and two functions
    b) The first function denotes whether the ship has been hit. It takes a pair of coordinates, and if it is hit, updates the coordinate within the ships array to "Blast"
    c) The second function checks whether a ship has been sunk, it looks at the hitLocation array and sees if all the contents are equal to "Blast"

2) gameboard.js
    a) Generates a gameboard object from a given dimension, it contains a board property which is an array of all the coordinates on the board and is generated with a helper function, dimension and size properties, a handful of properties generated by the ship factory function, and a handful of function properties
    b) The ship properties are generated from the ship factory functions and the arrays are set to empty as they are not populated into the board yet and there are no coordinates as a result
    c) A populateBoard function, which takes a coordinate and a ship. It populates both the ships hitLocation array and the gameboard array
    d) A receive attack function, which takes a coordinate and a ship. It checks to see if a ship has been hit or if theres a miss, and passes on the coordinates to the appropriate function property
    e) If theres a hit, it gets passed to the hit function property. It populates "Blast" into the ship hitLocation array and also in the gameboard
    f) If theres a miss, it gets passed to the missed function property. It populates "missed" into the gameboard
    g) Finally, there is a checkLoss function to see if all of the ships on the current gameboard have been sunk, and returns a boolean.

3) players.js && computer.js
    a) These factory functions are very similar but have some slight differences. They both generate player and computer objects that have properties containing their own respective gameboard objects (generated by the gameboard factory function), and properties that denote whether it is their turn, and whether or not the player/computer object is winner. There are also function to attack the enemy and to check for a win.
    b) The attack enemy is where the main difference comes into play. Both functions take a pair of coordinates and send an attack to the enemies gameboard. For the player function, the coordinates are given via DOM events listeners by clicking on the computers gameboard. On the other hand, the computer generates a random coordinate from a helper function. 
    c) The checkWin function checks to see if the other player has Lost via their gameboards checkLoss function


Upon having all these factory functions built and tested I began working on the DOM. Since DOM testing is out of the scope of this project, I did not test DOM events. I did, however, try hard to avoid needing to when building the factory functions' logic. I did not mock anything, however, in hindsight, I probably could have. 

Building the DOM:

1) Index.js
    a) Create initialization function that takes a dimension (button click). From the dimensions, it generates the player Objects (which contain all the other objects) and it generates two gameboards, 1 for each player. The gameboards are displayed via gridsquares that are appended to a container and organized with a grid display.
    b) Create function with event listeners so player1 can select where they want their ships to be placed
    c) Create a recursive function that randomly places the computers ships

2) War.js
    a) Create event listeners to advance the game, and two functions for the player or computer to attack.
    b) The attack functions make use of the player/computer object function properties, and are mostly used to style the board
    c) Finally, a function to reset the game once a winner is declared

3) Style the app

That's pretty much the process! I think the most challenging aspect was honestly getting the AI to randomly place the board pieces. Not only did it need to randomly place for each ship, but also randomly select the orientation, make sure its not placing over another ship, and also making sure each ship actually gets placed. The goal of the project was to avoid using too many console.log messages and try to test as much as possible. In this situation, I found the function to be too difficult to mock and easier to smooth out in the console. It still took sometime to test every return value, and a lot of trial and error, but I managed to make it work! 

I didn't run into too much trouble otherwise, there was an issue where the computer was firing too many attacks following a player attack, but that was fixed with a simple set timeout function to delay the attack.

**Conclusion**
This one was hard! But I really enjoyed it and it was actually much easier to make functional than the tic-tac-toe project (no minimax or smart AI necessary for this project). 


