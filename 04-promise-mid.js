const { error } = require("console");

// ร่างสัญญา Create a promise : details
function settleFn(resolveFn, rejectFn) {
  console.log("Start Promise");
  let num = Math.floor(Math.random() * 11);

  // Find even number
  if (num % 2 === 0) {
    console.log("I found even number", num);
    resolveFn(num);
    // rejectFn(num);
  } else {
    console.log("I found odd number", num);
    rejectFn(new Error("Found odd number"));
  }
}
// เซ็นสัญญา
// const promise2 = new Promise(settleFn);

// promise2
//   .then((result) => {
//     console.log("fullfil");
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("reject");
//     console.log(err);
//   })
//   .finally(() => console.log("End promise"));

// promise2
//   .then((res) => {
//     console.log(res);
//     return res + 1;
//   })
//   .then((res) => {
//     console.log(res);
//     return res + 1;
//   })
//   .then((res) => {
//     console.log(res);
//     return r + 1;
//   })
//   .catch((err) => console.log(err));

function newSettleFn(fulfillFn, rejectFn) {
  fulfillFn(2);
}
const promise_A = new Promise(newSettleFn);
const promise_B = new Promise(newSettleFn);
const promise_C = new Promise(newSettleFn);

const result = Promise.all([promise_A, promise_B, promise_C]);
result.then((r) => console.log(r)).catch((e) => console.log(e));
// console.log(result);
