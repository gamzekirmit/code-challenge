// "use strict";
/*

document.querySelector(
  `.question`
).textContent = `The Western Suburbs Croquet Club has two categories of membership, Senior
and Open. They would like your help with an application form that will
tell prospective members which category they will be placed. To be a
senior, a member must be at least 55 years old and have a handicap greater
than 7. In this croquet club, handicaps range from -2 to +26; the better
the player the lower the handicap. Input Input will consist of a list of
pairs. Each pair contains information for a single potential member.
Information consists of an integer for the person's age and an integer for
the person's handicap. Output Output will consist of a list of string
values (in Haskell and C: Open or Senior) stating whether the respective
member is to be placed in the senior or open category. Example input =
[[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]] output =
["Open", "Open", "Senior", "Open", "Open", "Senior"]`;

const croquetForm = [
  [18, 20],
  [55, 8],
  [37, 6],
  [61, 12],
  [21, 21],
  [78, 9],
];

const memberCategories = [];
let croquetForms = [];

const openOrSenior = function (data) {
  if (data[0] >= 55 && data[1] > 7) {
    return "Senior";
  } else {
    return "Open";
  }
};

for (let i = 0; i < croquetForm.length; i++) {
  memberCategories.push(openOrSenior(croquetForm[i]));
  croquetForms.push(`[${croquetForm[i]}]`);
}

document.querySelector(`.croquetForms`).textContent = croquetForms;
document.querySelector(`.memberCategories`).textContent = memberCategories;
console.log(croquetForms, memberCategories);
*/
const numbers = [6, 2, 1, 8, 10];

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) {
      return a - b;
    });
    let total = 0;
    for (let i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}
console.log(sumArray(numbers));

/*
2)Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

*/
function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  const lastPhraseIndex = (nbPetals - 1) % phrases.length;
  return phrases[lastPhraseIndex];
}
console.log(howMuchILoveYou(13));
