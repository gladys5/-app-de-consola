const inquirer = require("inquirer");
require("colors");
//const{prompt}=require('')

const questions = [
  {
    type: "list",
    name: "option",
    message:"¿ What would you like to do ?",
    choices: [
      { value: 0, name: "Go out".green },
      { value: 1, name: "Create task".green },
      { value: 2, name: "List task".green },
      { value: 3, name: "List completed".green },
      { value: 4, name: "List Pending".green },
      { value: 5, name: "Complete task".green },
      { value: 6, name: "Clean task".green },
    ],
  },
];



const inquirerMenu = async () => {
  console.log("\n")
  console.log("================================".rainbow);
  console.log(" ✨✨".rainbow, "Selection one option", "✨✨".rainbow);
  console.log("================================".rainbow);

  let {option}= await inquirer.prompt(questions);
  return option;
};
const pause = async () => {
  const question = [
    {
      type: "input",
      name: "option",
      message: `Push ${"ENTER".green} for continue`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(question);
};

module.exports = { inquirerMenu, pause };
