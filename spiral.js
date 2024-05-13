const n = 5;
const m = 5;
let currentNumber = 1;
let result = [];

// Fill the matrix n * m
for (let i = 0; i < n; i++) {
    result.push([]);
    for (let j = 0; j < m; j++) result[i].push(0);
}

let i = 0, j = 0;

// Coords when algorithm should turn
let edges = [
    [0, m - 1],
    [n - 1, m - 1],
    [n - 1, 0],
    [1, 0],

];

// Current array filling direction
// 0 - right, 1 - down, 2 - left, 3 - up
let currentDirection = 0;

// Iterate all numbers of spiral
while (currentNumber <= n * m) {
    // Add current number to result
    result[i][j] = currentNumber;
    currentNumber++;

    // Depending on the current direction increase the next number coords
    if (currentDirection == 0) j++;
    if (currentDirection == 1) i++;
    if (currentDirection == 2) j--;
    if (currentDirection == 3) i--;

    // If it's coords of element when algorithm should turn,
    // change direction and move this edge closer to the center of the spiral
    if (i == edges[currentDirection][0] && j == edges[currentDirection][1]) {

        if (currentDirection == 0) { edges[currentDirection][0]++; edges[currentDirection][1]-- }
        if (currentDirection == 1) { edges[currentDirection][0]--; edges[currentDirection][1]-- }
        if (currentDirection == 2) { edges[currentDirection][0]--; edges[currentDirection][1]++ }
        if (currentDirection == 3) { edges[currentDirection][0]++; edges[currentDirection][1]++ }

        currentDirection = (currentDirection + 1) % 4;
    }
}

console.log(result);
