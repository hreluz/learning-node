const {v4: uuidv4} = require('uuid')

const getUUID = () => {
    if (!uuidv4) return new Error('Uuidv4 is required')

    return uuidv4()
}

module.exports = {
    getUUID,
}

