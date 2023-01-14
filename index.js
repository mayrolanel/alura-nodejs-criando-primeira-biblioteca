import fs from 'fs';

import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Atenção! Não há arquivo no diretório'));
}

function pegarArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then((texto) => {
            console.log(chalk.green(texto));
        })
        .catch((erro) => {
            trataErro(erro)
        })

}

async function takeFile(path) {

    try {
        const encoding = 'utf-8';
        const text = await fs.promises
            .readFile(path, encoding)

        console.log(chalk.green(text));
    } catch (error) {
        trataErro(error)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
    
        
}

takeFile('./arquivos/');