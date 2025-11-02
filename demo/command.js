const { exec } = require('child_process');

const userArg = process.argv[2] || "";

exec("ls -la " + userArg, (err, stdout, stderr) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log(stdout || stderr);
});