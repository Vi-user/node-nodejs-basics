import fs from 'node:fs';
import { stdin, stdout } from 'node:process';

const write = async () => {
    // Write your code here
  stdout.write('Write sth in the console and press "enter" to save text into file.\nTo exit press "ctrl + c".\n');
  const file = fs.createWriteStream('./files/fileToWrite.txt');
  stdin.pipe(file);
};

await write();