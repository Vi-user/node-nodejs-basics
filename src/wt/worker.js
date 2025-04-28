import {Worker, isMainThread, parentPort, workerData} from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  if (!typeof workerData.num === 'number') {
    parentPort.postMessage(null);
  } else {
    parentPort.postMessage(nthFibonacci(workerData.num));
  }

};

sendResult();