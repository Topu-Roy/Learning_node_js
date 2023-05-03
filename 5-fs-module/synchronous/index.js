//! Reading and writing Files

const path = require("path");
const { readFileSync, writeFileSync } = require("fs");

// * Reading files
const firstFile = readFileSync(
  path.join(__dirname, "content", "first.txt"),
  "utf8"
);
const secondFile = readFileSync(
  path.join(__dirname, "content", "second.txt"),
  "utf8"
);

// console.log(firstFile);
// console.log(secondFile);

//! Writing files
//* If the given directory has a file
//* it will overwrite the existing file but if not
//* it will create a new file
//? by adding "a" flag it will not overwrite but append

writeFileSync(
  path.join(__dirname, "content", "third.txt"),
  `The Two files are :\nFirst:\t ${firstFile}\nsecond :\t ${secondFile}`
);

//! with the flag
// writeFileSync(
//   path.join(__dirname, "content", "third.txt"),
//   `The Two files are :\nFirst:\t ${firstFile}\nsecond :\t ${secondFile}`,
//   { flag: "a" }
// );

//* Reading third file
const thirdFile = readFileSync(
  path.join(__dirname, "content", "third.txt"),
  "utf8"
);

// console.log(thirdFile);
