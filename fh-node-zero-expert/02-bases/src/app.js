// const templateExports = require('./js-foundation/01-template')

const { getUserById } = require('./js-foundation/03-callbacks')

const {getAge, getUUID} = require('./plugins')

// require('./js-foundation/02-destructuring')
// require('./js-foundation/03-callbacks')
// require('./js-foundation/04-arrows')

// const id = 2
// getUserById(id, (error, user) => {
//     if (error) {
//         throw new Error(error, id)
//     }

//     console.log(user)
// })

const {buildMakePerson} = require('./js-foundation/05-factory')

const makePerson = buildMakePerson({getUUID, getAge})

const obj = {name: 'John', birthdate: '1992-10-10'}

const john = makePerson(obj)

console.log(john)

