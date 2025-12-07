/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-12-07
 * @fileoverview This program will simulate the rolling of a 10-sided die.
 */

// constants and variables
const MIN = 1;
const MAX = 10;
let roll: number;

// roll the die
// Math.random() generates a float in [0, 1).
// (MAX - MIN + 1) is 10. Multiplying gives [0, 10).
// Math.floor() gives integer [0, 9]. Adding MIN (1) shifts range to [1, 10].
roll = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

// display results
console.log("Rolling a 10-sided die...");
console.log(`You rolled a ${roll}.`);

console.log("\nDone.");
