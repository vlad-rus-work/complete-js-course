"use strict";
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

let avgOdd = 0;
for (const odd of Object.values(game.odds)) {
  avgOdd += odd / Object.values(game.odds).length;
}
console.log(avgOdd);

const gameOdss = Object.entries(game.odds);

for (const [team, odd] of gameOdss) {
  if (team === "x") console.log(`Odd of draw: ${odd}`);
  else console.log(`Odd of victory ${game[team]}: ${odd}`);
}

*/

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1
const events = new Set([...gameEvents.values()]);
console.log(events);
// 2
console.log(gameEvents.delete(64), gameEvents);
// 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
// 4
for (const [key, value] of gameEvents) {
  const halfStr = key <= 45 ? `[FIRST HALF]` : `[SECOND HALF]`;
  console.log(`${halfStr}${key}: ${value}`);
}
