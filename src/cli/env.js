const parseEnv = () => {
    // Write your code here
  let res = [];
  for (const [key, value] of Object.entries(process.env)) {

    if (key.startsWith('RSS_')) {
      res.push(`${key}=${value}`)
    }

  }
  console.log(res.join('; '));
};

parseEnv();