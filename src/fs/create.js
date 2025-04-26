import fs from 'node:fs';

const create = async () => {
    // Write your code here
  const text = 'I am fresh and young';
  const pathToFile = './files/fresh.txt';

  try {
    if (fs.existsSync(pathToFile)) {
      throw new Error('FS operation failed');
    } else {
      fs.writeFile(pathToFile, text, error => {
        if (error) {
          console.log(error)
        }
      })
    }
  } catch (e) {
    console.log(e)
  }
};

await create();