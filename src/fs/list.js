import fs from 'node:fs';
import fsAsync from "node:fs/promises";

const list = async () => {
    // Write your code here
  if (!fs.existsSync('./files')) {
    throw new Error('FS operation failed');
  } else {
    fsAsync.readdir('./files', {'withFileTypes': true})
      .then(result => result.filter(el => el.isFile()).map(el => console.log(el.name)))
      .catch(err => console.log(err))
  }
};

await list();