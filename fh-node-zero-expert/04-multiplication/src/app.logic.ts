import { yarg } from "./config/plugins/yargs.plugin";

const saveToFile = (data:string, number:number) => {
    const fs = require('fs');
    fs.mkdirSync('outputs', {recursive:true})
    fs.writeFileSync(`outputs/tabla-${number}.txt`, data);
    console.log('File created!')
}

const printAndSaveTable = (base:number, limit:number, show:boolean) => {

    let text = "================================\n"
    text +=`\t\ Tabla del ${base}\n`
    text +='================================\n'

    for(let i = 0; i <= limit; i++) {
        text += `\n${base} x ${i} =  ${i*base}`
    }

    saveToFile(text, base)

    if (show) {
        console.log(text)
    }
}

const {b:base, l: limit, s: showTable} = yarg
printAndSaveTable(base, limit, showTable)

//npx ts-node src/app.logic.ts  -b 20  -l 30 -show true