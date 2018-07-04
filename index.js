
// Reminder: run this file with:
// $ node_modules/.bin/babel index.js | node


const func1 = val => val * 2;
const func2 = val => val + 5;
const result = 5 |> func1 |> func2;
console.log('-------------- result', result);
