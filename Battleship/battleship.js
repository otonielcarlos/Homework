var readline = require("readline-sync");

function isShip() {
    var randNumber = Math.floor(Math.random() * 5) + 1;
    if (randNumber === 1) {
        return true;
    } else {
        return false;
    }
}
var Location = function () {
    this.ship = isShip(),
        this.hit = false,
        this.display = "~"
}
var grid = [];

function createGrid() {
    var count = 0;
    for (var i = 0; i < 10; i++) {
        var row = [];
        for (var x = 0; x < 10; x++) {
            var newLocation = new Location();
            row.push(newLocation);
            if (newLocation.ship) {
                count += 1;
            }
        }
        grid.push(row);
    }
    return count;
}
function printGrid() {
    var displayGrid = [];
    for (var i = 0; i < 10; i++) {
        var row = [];
        for (var x = 0; x < 10; x++) {
            var currentLocation = grid[i][x];
            row.push(currentLocation.display);
        }
        displayGrid.push(row.join(" "));
    }
    console.log(displayGrid.join("\n"));
}

function updateGrid(row, column) {
    var currentLocation = grid[row][column];
    if (currentLocation.ship) {
        console.log("Hit!! You sank this ship!\n");
        currentLocation.hit = true;
        currentLocation.display = "X";
        shipCount -= 1;
    } else {
        console.log("Missed :( ");
        currentLocation.display = "M";
    }
    printGrid();
}
var shipCount = createGrid();

while (shipCount > 0) {
    printGrid();
    var column = readline.question("Choose a column between 0-9: ");
    if (column > 9) {
        var column = readline.question("You have to choose a column between 0-9: ");
    }
    var row = readline.question("Choose a row between 0-9: ");
    if (row > 9) {
        var row = readline.question("You have to choose a row between 0-9: ")
    }
    updateGrid(row, column);
    console.log("There are " + shipCount + " ships left");
}

if (shipCount === 0) {
    console.log("You won!")
}