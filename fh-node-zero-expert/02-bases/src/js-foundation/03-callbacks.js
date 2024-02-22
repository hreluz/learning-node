const users = [
    {
        id: 1,
        name: 'John doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];

function getUserById(id, callback) {
    const user =  users.find(function(user) {
        return user.id === id;
    })

    if (!user) {
        return callback(`User not found with id ${id}`);
    }

    return callback(null, user)
}


module.exports = {
    getUserById
}