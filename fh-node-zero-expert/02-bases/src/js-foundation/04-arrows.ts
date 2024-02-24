interface User {
    id: number,
    name:string
}

const users:User[] = [
    {
        id: 1,
        name: 'John doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];

function getUserById(id: number, callback:(err?:string, user?:User) => void) {
    const user =  users.find(u => u.id === id)

    if (!user) {
        return callback(`User not found with id ${id}`);
    }

    return callback(undefined, user)
}


module.exports = {
    getUserById
}