import fs from 'node:fs';
import fsAsync from "node:fs/promises";

const read = async () => {
    // Write your code here
  if (!fs.existsSync('./files/fileToRead.txt')) {
    throw new Error('FS operation failed');
  } else {
    try {
      const text = await fsAsync.readFile('./files/fileToRead.txt', {encoding: 'utf-8'});
      console.log(text)
    } catch(err) {
      console.log(err)
    }
  }
};

await read();