import {v4 as uuidv4} from 'uuid'

export const getUUID = () => {
    // if (!uuidv4) return new Error('Uuidv4 is required')

    return uuidv4()
}

