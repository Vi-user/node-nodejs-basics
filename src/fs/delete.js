import fs from "node:fs";

const remove = async () => {
    // Write your code here
  const pathToFile = './files/fileToRemove.txt';

  try {
    if (!fs.existsSync(pathToFile)) {
      throw new Error('FS operation failed');
    } else {
      fs.unlinkSync(pathToFile)
    }
  } catch (e) {
    console.log(e)
  }
};

await remove();