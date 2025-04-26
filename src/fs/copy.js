import fs from 'node:fs';
import path from 'node:path';
import fsAsync from 'node:fs/promises';

const copy = async () => {
    // Write your code here
  const errorText = 'FS operation failed';
  const originalFolder = './files';
  const copyFolder = './files_copy';
  try {
    if (!fs.existsSync(originalFolder) || fs.existsSync(copyFolder)) {
      throw new Error(errorText);
    } else {
      fs.mkdirSync(copyFolder);
      const curFolderFiles = await fsAsync.readdir(originalFolder);
      curFolderFiles.forEach(file => {
        const curFile = path.join(originalFolder, file);
        const newFile = path.join(copyFolder, file);
        fsAsync.copyFile(curFile, newFile);
      })
    }
  } catch (e) {
    console.log(e)
  }
};

await copy();

