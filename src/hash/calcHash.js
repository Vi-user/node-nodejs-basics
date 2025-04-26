import { createHash } from 'node:crypto';
import fsAsync from "node:fs/promises";
import { stdout } from 'node:process';

const calculateHash = async () => {
    // Write your code here
  const data = await fsAsync.readFile('./files/fileToCalculateHashFor.txt', {encoding: 'utf-8'});

  const hash = createHash('sha256')
    .update(data, 'utf8')
    .digest('hex');
  stdout.write(hash);
};

await calculateHash();