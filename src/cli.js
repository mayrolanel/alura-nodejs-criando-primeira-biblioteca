import takeFile from "./index.js";
import fs from 'fs';
import chalk from 'chalk';

const path = process.argv;

async function processText(args) {

    const path = args[2]

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
        printList(result)
    } else if(fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path)

        files.forEach(async (fileName) => {
            const list = await takeFile(`${path}/${fileName}`)
            printList(list, fileName)
        })
    }
}

function printList(list, fileName = '') {
    console.log(
        chalk.black.bgGreen(fileName),
        list)
    
}

processText(path)

