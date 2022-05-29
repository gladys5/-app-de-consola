const inquirer = require('inquirer')
require('colors')

const questions = [
    {
        type: 'list',

        name: 'option',
        message: '¿ What would you like to do ?',
        choices: [
            {
                value: '1',
                name: `${'1.'.blue} Create task`,
            },
            {
                value: '2',
                name: `${'2.'.blue} List tasks`,
            },
            {
                value: '3',
                name: `${'3.'.blue} List tasks Complet`,
            },
            {
                value: '4',
                name: `${'4.'.blue} List tasks pending`,
            },
            {
                value: '5',
                name: `${'5.'.blue} Complete task(s)`,
            },
            {
                value: '6',
                name: `${'6.'.blue} Erase task`,
            },
            {
                value: '0',
                name: `${'0.'.blue} Exist`,
            },
        ],
    },
]

const inquirerMenu = async () => {
    console.clear()
    console.log('================================'.rainbow)
    console.log(' ✨✨'.rainbow, 'Select one option', '✨✨'.rainbow)
    console.log('================================'.rainbow)

    let { option } = await inquirer.prompt(questions) //opcion traera la respuesta promp espera las preguntas de question//lo que sea que responda se guarda en opt
    return option
}
const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Push ${'enter'.blue} for continue`,
        },
    ]

    console.log('\n')
    await inquirer.prompt(question) //espera a que presione pausa{ENTER} para continuar
}

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'please add one value'
                }
                return true
            },
        },
    ]

    const { desc } = await inquirer.prompt(question)
    return desc
}
const listTasksErase = async (tasks = []) => {
    const choices = tasks.map((task, index) => {
        const idIndex = ` ${index + 1}`.blue
        return {
            value: task.id,
            name: `${idIndex}${task.desc}`,
        }
    })

    choices.unshift({
        //insertara al principio del array la opcion '0' y con esta canselo el borrado
        value: '0',
        name: '0.'.blue + 'cansel',
    })

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Erase',
            choices,
        },
    ]
    let { id } = await inquirer.prompt(questions)

    return id
}

const confirm = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message,
        },
    ]
    let { ok } = await inquirer.prompt(question)
    return ok
}

const showCheckList = async (tasks = []) => {
    const choices = tasks.map((task, index) => {
        const idIndex = ` ${index + 1}.`.blue
        return {
            value: task.id,
            name: `${idIndex}${task.desc}`,
            checked: task.completed ? true : false,
        }
    })

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Select',
            choices,
        },
    ]
    let { ids } = await inquirer.prompt(question)

    return ids
}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listTasksErase,
    confirm,
    showCheckList,
}
