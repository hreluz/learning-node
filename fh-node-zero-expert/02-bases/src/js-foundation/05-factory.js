// const {getAge, getUUID} = require('../plugins')

const buildMakePerson = ({getUUID, getAge}) => {
    return ({name, birthdate}) => {

        return {
            id: getUUID(),
            name,
            birthdate,
            // age: new Date().getFullYear() - new Date(birthdate).getFullYear()
            age: getAge(birthdate)
        }
    }
}

module.exports = {
    buildMakePerson
}