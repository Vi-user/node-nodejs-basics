import os from 'node:os'
import {parentPort, Worker} from "node:worker_threads";

const performCalculations = async () => {
    // Write your code here
  const cpuNum = os.cpus().length;
  const minNum = 10;

  const arr = [];
  for (let i = 0; i < cpuNum; i++) {
    const worker = new Worker('./worker.js', {workerData: {num: minNum + i }});
    worker.on('message', (res) => {
      if (typeof res === "number") {
        arr.push({'resolved': `${res}`})
      } else {
        arr.push({'error': 'null'})
      }

    });
  }
  setTimeout(() => {
    console.log(arr.sort((a, b) => (+a.resolved < +b.resolved ) ? -1 : 1 ));
  }, 300);


};

await performCalculations();