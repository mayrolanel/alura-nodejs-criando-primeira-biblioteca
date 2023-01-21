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

        console.log(extractLink(text))
    } catch (error) {
        trataErro(error)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
    
        
}

function extractLink(text) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

    const captures = [...text.matchAll(regex)]

    const results = captures.map(capture => ({[capture[1]]: capture[2]}))

    return results;
}

takeFile('./arquivos/texto.md');