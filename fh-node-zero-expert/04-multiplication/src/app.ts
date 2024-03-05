const saveToFile = (data:string, number:number) => {
    const fs = require('fs');
    fs.mkdirSync('outputs', {recursive:true})
    fs.writeFileSync(`outputs/tabla-${number}.txt`, data);
    console.log('File created!')
}

const printAndSaveTable = (number:number, to:number) => {

    let text = "================================\n"
    text +=`\t\ Tabla del ${number}\n`
    text +='================================\n'

    for(let i = 0; i <= to; i++) {
        text += `\n${number} x ${i} =  ${i*number}`
    }

    saveToFile(text, number)

    console.log(text)
}

const number = 5

printAndSaveTable(5, 10)