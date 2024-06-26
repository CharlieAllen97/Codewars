// Greed is a dice game played with five six - sided dice.Your mission, should you choose to accept it,
// is to score a throw according to these rules.You will always be given an array with five six - sided dice values.

//   Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   => 100 points
//  One   5   => 50 point
// A single die can only be counted once in each roll.For example, a given "5" can only count as part of a triplet
// (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
// --------- ------------------
//   5 1 3 4 1   250: 50(for the 5) + 2 * 100(for the 1s)
//   1 1 1 3 1   1100: 1000(for three 1s) + 100(for the other 1)
//   2 4 4 5 4   450: 400(for three 4s) + 50(for the 5)
//   Note: your solution must not modify the input array.

interface Counts {
  1: number,
  2: number,
  3: number,
  4: number,
  5: number,
  6: number
}

export function score(dice: number[]): number {
  let counts: Counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
  let score: number = 0

  dice.forEach((roll) => { counts[roll as keyof Counts]++ })

  for (const key in counts) {
    if (counts[parseInt(key) as keyof Counts] > 2) {
      if (key == "1") {
        score += 1000
      }
      else {
        score += parseInt(key) * 100
      }
      if (counts[parseInt(key) as keyof Counts] - 3 != 0) {
        if (key == "1") {
          score += 100 * (counts[key] - 3)
        }
        else if (key == "5") {
          score += 50 * (counts[key] - 3)
        }
      }
    }
    else {
      if (key == "1") {
        score += 100 * counts[key]
      }
      else if (key == "5") {
        score += 50 * counts[key]
      }
    }
  }

  return score;
}

console.log(score([1, 1, 1, 1, 2]))