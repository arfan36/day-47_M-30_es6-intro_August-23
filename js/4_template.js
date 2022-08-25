const person = 'Adam Sand';
const person2 = "Ben White";
const person3 = `Donalt Trump`;

const multiline = 'First Line text \n' +
    'second line of code \n' +
    'third line of code \n' +
    'Fourth line of string';
// console.log(multiline);

const newMultiline = `First line of text
second line of text
third line of text
Fourth line of string`;
// console.log(multiline);

const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 6, 444];
const summmary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a + b);
// console.log(summmary);

const newSummary = `sum of ${a} and ${nums.length} is: ${a + b}`;
console.log(newSummary);