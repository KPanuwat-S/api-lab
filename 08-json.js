const student = {
  name: "John",
  age: 27,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
  sayHi() {
    console.log("Hi");
  },
};
console.log(typeof student);

const json = JSON.stringify(student); // stringify = method transforming js object to json
console.log(typeof json); // we've got a string!
console.log(json);

let result = JSON.parse(json);
console.log("json parse", typeof result);
console.log(result);
