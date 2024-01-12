"use strict";

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
