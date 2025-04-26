const parseArgs = () => {
    // Write your code here
  const params = Object.entries(process.argv).slice(2);
  let res = [];
  for (let i = 0; i < params.length; i += 2) {
    res.push(`${params[i][1].slice(2)} is ${params[i+1][1]}`)
  }

  console.log(res.join(', '));
};

parseArgs();