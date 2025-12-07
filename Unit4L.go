// Author: William Provost
// Version: 1.0.0
// Date: 2025-12-07
// Fileoverview: This program will simulate the rolling of a 10-sided die.

package main

import (
	"fmt"
	"math/rand/v2" // import the random package, new in Go 1.22+
)

func main() {
	// constants
	const MIN int = 1
	const MAX int = 10
	
	// This removes the S1021 warning.
	roll := rand.IntN(MAX-MIN+1) + MIN 

	// display results
	fmt.Println("Rolling a 10-sided die...")
	fmt.Printf("You rolled a %d\n", roll)

	fmt.Println("\nDone.")
}
