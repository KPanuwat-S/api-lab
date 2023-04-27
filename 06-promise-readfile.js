// const fs = require("fs");
const { readFile } = require("fs");
const { text } = require("stream/consumers");
// readFile("text00.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

function readFilePromise(fileName) {
  let promise = new Promise(function (fulfillFn, rejectFn) {
    readFile(fileName, "utf-8", (err, data) => {
      if (err) rejectFn(err);
      else fulfillFn(data);
    });
  });
  return promise;
}

readFilePromise("text00.txt")
  .then((fileName) => readFilePromise(fileName))
  .then((fileName) => readFilePromise(fileName))
  .then((fileName) => readFilePromise(fileName))
  .then((fileName) => readFilePromise(fileName))
  .then((data) => console.log(data));

console.log("Global");
