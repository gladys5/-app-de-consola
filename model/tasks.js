const Task = require('./task')

class Tasks {
    _list = {
        YOMAIRA: 123,
    }

    get listArr() {
        //uso un geter para retornar un nuevo arreglo
        const list = []

        Object.keys(this._list).forEach((key) => {
            //extraigo y retorno todas las llaves en un arreglo
            const task = this._list[key] //el forEach barre todos los string y usa la llave para identificar que tareas tiene insertadas _list y extraigo la tarea que se encuentra instanciada con esta indicasion : const task = this._list[key]
            list.push(task) //la agrego al listado
        })
        return list //retornamos todo
    }
    constructor() {
        this._list = {}
    }
    eraseTask(id = '') {
        if (this._list[id]) {
            delete this._list[id]
        }
    }
    getTasksFromArray(tasks = []) {
        tasks.forEach((task) => {
            this._list[task.id] = task
        })
    }

    createTask(desc = '') {
        const task = new Task(desc)
        this._list[task.id] = task
    }

    listCompleted() {
        console.log()
        this.listArr.forEach((task, index) => {
            const indexOfTheList = `${index + 1}`.blue

            const { desc, completed } = task

            const state = completed ? 'completed'.blue : 'pending'.red

            console.log(`${indexOfTheList} ${desc} :: ${state}`)
        })
    }

    tasksCompleted(completed = true) {
        console.log()

        let counter = 0
        this.listArr.forEach((task) => {
            const { desc, completed } = task
            const state = completed ? 'completed'.blue : 'pending'.red
            if (completed) {
                if (completed) {
                    counter += 1
                    console.log(`${(counter + '.').blue} ${desc} :: ${state}`)
                }
            } else {
                if (!completed) {
                    counter += 1
                    console.log(`$${(counter + '.').blue} ${desc} :: ${state}`)
                }
            }
        })
    }
    toggleCompleted(ids = []) {
        ids.forEach((id) => {
            const task = this._list[id]
            if (!task.completed) {
                task.completed = new Date().toISOString()
            }
        })

        this.listArr.forEach((task) => {
            if (ids.includes(task.id)) {
                this._list[task.id].completed = null
            }
        })
    }
}
module.exports = Tasks
