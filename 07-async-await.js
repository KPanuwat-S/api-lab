const { readFile } = require("fs");
async function a() {
  throw new Error("Hi this is error"); //promise reject
  return 2; //promise fullfil
  //items retured from async fn will be promise so it can be then chaining
}

// console.log(a());
// a()
//   .then((r) => console.log(r))
//   .catch((err) => console.log("OOOOO"));

// Async function
function readFilePromise(fileName) {
  let promise = new Promise(function (fulfillFn, rejectFn) {
    readFile(fileName, "utf-8", (err, data) => {
      if (err) rejectFn(err);
      else fulfillFn(data);
    });
  });
  return promise;
}

async function f1() {
  try {
    let res1 = await readFilePromise("text00.txt");
    let res2 = await readFilePromise(res1);
    let res3 = await readFilePromise(res2);
    let res4 = await readFilePromise(res3);
    let res5 = await readFilePromise(res4);
    console.log(res5);
  } catch (err) {
    console.log(err);
  }
}

f1();

console.log("global");
