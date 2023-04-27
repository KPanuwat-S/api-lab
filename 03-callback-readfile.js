const fs = require("fs");

// fs.readFile("text91.txt", "utf-8", (err, data) => {
//   console.log("Reading a file");
//   console.log("Error:", err);
//   console.log("Data:", data);
// });

// console.log("global");

fs.readFile("text00.txt", "utf-8", (err, data) => {
  // data1
  fs.readFile(data, "utf-8", (err, data) => {
    // data2
    fs.readFile(data, "utf-8", (err, data) => {
      fs.readFile(data, "utf-8", (err, data) => {
        fs.readFile(data, "utf-8", (err, data) => {
          console.log(data);
        });
      });
    });
  });
});
