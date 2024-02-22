// const templateExports = require('./js-foundation/01-template')

const { getUserById } = require('./js-foundation/03-callbacks')

// require('./js-foundation/02-destructuring')
require('./js-foundation/03-callbacks')

const id = 2
getUserById(id, function(error, user){
    if (error) {
        throw new Error(error, id)
    }

    console.log(user)
})