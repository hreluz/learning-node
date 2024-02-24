// const {getAge, getUUID} = require('../plugins')
interface buildMakePersonOptions {
    getUUID: () => string,
    getAge: (birthdate:string) => number
}

interface PersonOptions {
    name: string,
    birthdate: string
}

export const buildMakePerson = ({getUUID, getAge}:buildMakePersonOptions) => {
    return ({name, birthdate}:PersonOptions) => {

        return {
            id: getUUID(),
            name,
            birthdate,
            // age: new Date().getFullYear() - new Date(birthdate).getFullYear()
            age: getAge(birthdate)
        }
    }
}
