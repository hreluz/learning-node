const {getAge, getUUID} = require('../plugins')

const buildPerson = ({name, birthdate}) => {

    return {
        id: getUUID(),
        name,
        birthdate,
        // age: new Date().getFullYear() - new Date(birthdate).getFullYear()
        age: getAge(birthdate)
    }

}

const obj = {name: 'John', birthdate: '1992-10-10'}
const john = buildPerson(obj)

console.log(john)