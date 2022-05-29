const fs = require('fs')
const file = './db/data.json'

const restDb = (data) => {
    fs.writeFileSync(file, JSON.stringify(data))
}

const readD = () => {
    if (!fs.existsSync(file)) {
        return null
    }

    const info = fs.readFileSync(file, { encoding: 'utf-8' }) //es para poder leer el archivo Json creado(los guarda en el archivo que se crea)
    //el encodin es para que no regrese beats

    const data = JSON.parse(info)

    return data
}

module.exports = {
    restDb,
    readD,
}
