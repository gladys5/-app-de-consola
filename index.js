require('colors')

const {
    inquirerMenu,
    pause,
    readInput,
    listTasksErase,
    confirm,
    showCheckList,
} = require('./helpers/inquirer')

const Tasks = require('./model/tasks')

const { restDb, readD } = require('./helpers/addFile')

const main = async () => {
    let opt = '' //opsion es un string
    const tasks = new Tasks()

    const tasksDb = readD()
    if (tasksDb) {
        tasks.getTasksFromArray(tasksDb)
    }

    await pause()

    do {
        //aqui ejecutamos nuestras condiciones
        opt = await inquirerMenu() //inprime el menu y retorna una opsion
        switch (opt) {
            case '1':
                const desc = await readInput('Description:')
                tasks.createTask(desc)
                break

            case '2': //tareas listadas para mostrar
                tasks.listCompleted()
                break
            case '3':
                tasks.listCompleted(true)
                break
            case '4':
                tasks.tasksCompleted(false)
                break
            case '5':
                const ids = await showCheckList(tasks.listArr)
                tasks.toggleCompleted(ids)
                break
            case '6':
                const id = await listTasksErase(tasks.listArr)
                if (id !== '0') {
                    const confirmOk = await confirm('you sure')

                    if (confirmOk) {
                        tasks.eraseTask(id)
                        console.log('task Erase')
                    }
                }

                break
        }
         restDb(tasks.listArr)
        await pause() //si esta en la pausa y el usuario preciona enter cumple el siclo y se sale
    } while (opt !== ' 0') //cuando se ejecute la opcion aqui la resivimos y al evaluarse la condicion si no es diferente de '0' se sale
}
main()
