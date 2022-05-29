require('colors')

const showMenu = () => {
    console.clear()
    return new Promise((resolve) => {
        //las promesas se disparan con el resolve y el reject aqui reronamos al menu despues de que el usuario da enter (opt)
        console.clear()
        console.log('================================'.rainbow)
        console.log(' ✨✨'.rainbow, 'Selection one option', '✨✨'.rainbow)
        console.log('================================'.rainbow)

        console.log(`${'0.'.green}Go out`)
        console.log(`${'1. '.green}create Task`)
        console.log(`${'2.'.green}List Task`)
        console.log(`${'3.'.green}List completed Task`)
        console.log(`${'4.'.green}List  Pending Task`)
        console.log(`${'5.'.green}Complete Task`)
        console.log(`${'6.'.green}clean Task`)

        const readline = require('readline').createInterface({
            //resivir y pedir  informacion al usuario, esta es la interfas
            input: process.stdin, //pausare la ejecusion de node para el resivir los caracteres y el enter del usuario
            output: process.stdout, //aqui mostrare un mensaje en consola cuando  yo quiera pedirle algo al usuario
        })
        readline.question(`Select One option:`, (opt) => {
            //solicitamos un dato al usuario disparada en un callback opt es nuestra opsion a elejir por el resultado

            readline.close()
            resolve(opt) //lo que sea que el usuario envie a qui lo resivimoms
        })
    })
}

const pause = () => {
    //pausar la aplicasion
    return new Promise((resolve) => {
        readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        readline.question(`Push ${'ENTER'.bgBlue} for continue`, (opt) => {
            // con esta opcion regresamos al menu principal
            readline.close() //cerrar esa opcion
            resolve() //resolvemos la promesa
        })
    })
}

module.exports = {}
