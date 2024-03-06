import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplicatio table base '
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'SHow multiplication table'
    })
    .check((argv, options) => {
        if (argv.b < 0) throw 'error: base must be greater than 0'
        return true
    })
    .parseSync()


