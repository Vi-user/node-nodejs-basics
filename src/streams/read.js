import fs from 'node:fs';

const read = async () => {
    // Write your code here
  const stream = fs.createReadStream('./files/fileToRead.txt', 'utf-8');
  let data = '';
  stream.on('data', chunk => data += chunk);
  stream.on('end', () => process.stdout.write(data));
  stream.on('error', err => console.log('error:', err.message))
};

await read();