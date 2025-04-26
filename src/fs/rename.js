import fs from "node:fs";

const rename = async () => {
    // Write your code here
  try {
    if (!fs.existsSync('./files/wrongFilename.txt') || fs.existsSync('./files/properFilename.md')) {
      throw new Error('FS operation failed');
    } else {
      fs.renameSync('./files/wrongFilename.txt', './files/properFilename.md')
    }
  } catch (e) {
    console.log(e)
  }
};

await rename();