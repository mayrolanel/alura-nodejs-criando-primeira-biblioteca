import takeFile from "./index.js";
import fs from 'fs';
import chalk from 'chalk';
import validatedList from './http-validacao.js'

const path = process.argv;

async function processText(args) {

    const path = args[2]
    const validate  = args[3] === '--valida'

    try {
        fs.lstatSync(path)
    } catch (error) {
        if(error.code === 'ENOENT') {
            console.log(chalk.yellow("Atenção! Arquivo ou diretório não existe"));
            return; 
        }
    }

    if(fs.lstatSync(path).isFile()) {

        const result = await takeFile(args[2])
        printList(validate, result)
    } else if(fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path)

        files.forEach(async (fileName) => {
            const list = await takeFile(`${path}/${fileName}`)
            printList(validate, list, fileName)
        })
    }
}

async function printList(validate, list, fileName = '') {

    if(validate) {
        console.log(
            chalk.black.bgGreen(fileName),
            await validatedList(list)
        )
    } else {
        console.log(
            chalk.black.bgGreen(fileName),
            list)
    }
    
}

processText(path)

