const {colors} = require("colors");


const showMenu = () => {
    console.clear()
  return new Promise((resolve) => {
    console.clear();
  console.log("================================".rainbow);
  console.log(" ✨✨".rainbow, "Selection one option", "✨✨".rainbow);
  console.log("================================".rainbow);

    console.log(`${"0.".green}Go out`);
    console.log(`${"1. ".green}create Task`);
    console.log(`${"2.".green}List Task`);
    console.log(`${"3.".green}List completed Task`);
    console.log(`${"4.".green}List  Pending Task`);
    console.log(`${"5.".green}Complete Task`);
    console.log(`${"6.".green}clean Task`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(`Select One option:`, (opt) => {
      readline.close()
      resolve(opt)
    });
  });
};



const pause = () => {
    return new Promise(resolve=>{
  readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question(`Push ${"ENTER".bgBlue} for continue`, (opt) => {
    readline.close()
    resolve()
  });
  })
};

module.exports = { showMenu, pause };
