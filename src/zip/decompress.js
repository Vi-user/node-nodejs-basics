import fs from 'node:fs';
import zlib from "node:zlib";

const decompress = async () => {
    // Write your code here
  const unzip = zlib.createUnzip();
  const data = fs.createReadStream('./files/archive.gz');
  const res = fs.createWriteStream('./files/fileToCompress.txt');

  // pipeline(data, gzip, res);
  data.pipe(unzip).pipe(res);
};

await decompress();