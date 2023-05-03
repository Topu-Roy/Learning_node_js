//* Making a big TXT file
// const fs = require("fs");
// const path = require("path");

// if (!fs.existsSync(path.join(__dirname, "content"))) {
//   fs.mkdir(path.join(__dirname, "content"), (err) => {
//     console.log(err);
//   });
// }
// for (let index = 0; index < 10000; index++) {
//   fs.writeFileSync(
//     path.join(__dirname, "content", "big-text.txt"),
//     `This is a big text file. \n !@##$$%%^^^&&*\n`,
//     { flag: "a+" }
//   );
// }

//* Learn about streams in node.js
