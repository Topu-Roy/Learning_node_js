const { readFile } = require("fs");
const path = require("path");

//! Promise Constructor Syntax
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (error, data) => {
      if (error) {
        reject(error);
        return;
      } else {
        resolve(data);
      }
    });
  });
};

const filePath = path.join(__dirname, "content", "file.txt");
getText(filePath)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
