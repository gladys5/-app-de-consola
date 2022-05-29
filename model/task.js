const { v4: uudiv4 } = require('uuid')//identificador unico

class Task {
    id = ''
    desc = ''
    completed = null
    
    constructor(desc) {
        this.id = uudiv4()
        this.desc = desc
        this.completed = null
    }
}

module.exports = Task
