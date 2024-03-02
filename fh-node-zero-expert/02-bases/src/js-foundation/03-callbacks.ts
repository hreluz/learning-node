import { setTimeout } from "timers/promises";

interface User {
    id: number,
    name: string
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

export function getUserById(id:number, callback:(err?:string, user?:User) => void) {
    const user =  users.find(u => u.id === id)

    if (!user) {
        global.setTimeout(() => {
            callback(`User not found with id ${id}`)
        }, 1500);
        return 
    }

    return callback(undefined, user)
}