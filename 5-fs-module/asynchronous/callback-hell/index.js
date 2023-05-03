const { readFile, writeFile } = require("fs");
const path = require("path");

//! Callback hell
readFile(
  path.join(__dirname, "content", "one.txt"),
  "utf8",
  (error, result) => {
    try {
      const fileOne = result;

      readFile(
        path.join(__dirname, "content", "two.txt"),
        "utf8",
        (error, result) => {
          try {
            const fileTwo = result;

            //! Writing files
            //* If the given directory has a file
            //* it will overwrite the existing file but if not
            //* it will create a new file
            //? by adding "a" flag it will not overwrite but append

            writeFile(
              path.join(__dirname, "content", "three.txt"),
              `file one : ${fileOne}\nfile two: ${fileTwo}\n`,

              (error, result) => {
                try {
                  const fileThree = result;
                  console.log(fileThree);
                } catch (error) {
                  console.log(error);
                }
              }
            );
          } catch (error) {
            console.log(error);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
);
