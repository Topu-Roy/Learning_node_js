//* With manually making promises
// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

//* alternative syntax
const { readFile, writeFile } = require("fs").promises;

const path = require("path");
const filePath = path.join(__dirname, "content", "file.txt");

//* async await syntax

const getFileContent = async (filePath) => {
  try {
    const getFirstFile = await readFile(filePath, "utf8");
    await writeFile(
      path.join(__dirname, "content", "second.txt"),
      `${getFirstFile}\n\nThis is the second file`
    );
    console.log(getFirstFile);
  } catch (error) {
    console.log(error);
  }
};

getFileContent(filePath);

//* Promise Constructor Syntax
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (error, data) => {
//       if (error) {
//         reject(error);
//         return;
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

//* then chaining method
// getText(filePath)
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));
