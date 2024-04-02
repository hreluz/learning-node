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

        // let outputMessage = `================================\n\t\ Tabla del ${base}\n================================\n`
        let outputMessage = '';

        for(let i = 1; i <= limit; i++) {
            outputMessage += `${base} x ${i} =  ${i*base}`

            if (i<limit) outputMessage+= '\n';
        }

        return outputMessage
    }
}