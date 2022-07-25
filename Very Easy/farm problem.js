// VARIANT 1

function animals(chickens, cows, pigs) {
  let chickenLegs = chickens * 2;
  let cowLegs = cows * 4;
  let pigLegs = pigs * 4;
  return chickenLegs + cowLegs + pigLegs;
}

console.log(animals(3, 5, 2));


// VARIANT 2

function animals(chickens, cows, pigs) {
  chickens *= 2;
  cows *= 4;
  pigs *= 4;
  return chickens + cows + pigs;
}
