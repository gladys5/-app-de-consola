

const { inquirerMenu,pause } = require('./task/inquirer')
//const Task = require('./model/task')
const Tasks = require ('./model/tasks')


const main = async()=>{
    console.log("\n")

    let opt='';
       const tasks= new Tasks()

    do{
       opt = await inquirerMenu()
       console.log({opt})
    // const task= new Task("dfswdf")
     //console.log(task)
   
    //   tasks._list[Task.id]= Task
    //  console.log(tasks)  
     await pause()
    
    
    }while (opt!==0)
   
   
}
main()

