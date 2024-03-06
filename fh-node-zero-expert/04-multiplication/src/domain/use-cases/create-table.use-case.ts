export interface CreateTableUseCase {
    execute: (options:CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number
}

export class CreateTable implements CreateTableUseCase{
    constructor() {


    }

    execute({base, limit = 10}:CreateTableOptions) {

        let outputMessage = `================================\n\t\ Tabla del ${base}\n================================\n`

        for(let i = 0; i <= limit; i++) {
            outputMessage += `\n${base} x ${i} =  ${i*base}`
        }

        return outputMessage
    }
}