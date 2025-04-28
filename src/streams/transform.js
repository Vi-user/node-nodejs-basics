import fs from 'node:fs';
// import { stdin, stdout } from 'node:process';
import * as readline from 'node:readline';
//
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


const transform = async () => {
    // Write your code here
  // let inf = '';

  rl.on('line', data => {
    // console.log((data.toString().split('').reverse().join('')));
    const res = data.toString().split('').reverse().join('');
    rl.write(res);
    rl.close();
  })

};

await transform();