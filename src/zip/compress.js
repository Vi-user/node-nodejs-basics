import fs from 'node:fs';
import zlib from "node:zlib";
// import {pipeline} from 'node:stream';

const compress = async () => {
    // Write your code here
  const gzip = zlib.createGzip();
  const data = fs.createReadStream('./files/fileToCompress.txt');
  const res = fs.createWriteStream('./files/archive.gz');

  // pipeline(data, gzip, res);
  data.pipe(gzip).pipe(res);
};

await compress();