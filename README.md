# Node.js: criando sua primeira biblioteca

# Sobre o projeto
Node.js: criando sua primeira biblioteca é um curso da alura que busca ensinar os conceitos do nodejs onde criei um projeto que analisa arquivos ``markdown`` buscando os links nesse arquivo, usa o ``fetch`` do node para testar cada link e consegue retornar um objeto com os links válidos ou inválidos. Também aprendi: 
- A importar e utilizar código de repositórios de código aberto
- O que são as promessas e como trabalhar com código assíncrono em Node.js
- Primeiras expressões regulares e veja como utilizá-las para resolver problemas
- Criar seus próprios comandos para serem executados no terminal
- Usar as bibliotecas mais recentes do Node.js para fazer requisições HTTP e manejar respostas

## Na aula-01: Criando um projeto em node, você aprendeu:
- Que para criar um projeto em Node.js utilizamos o comando `npm init`;
- Que o arquivo `package.json` é utilizado pelo Node.js para listar as dependências instaladas, além de informações sobre versão do programa, autoria e scripts;
- Que as dependências (também chamadas de libs ou bibliotecas) são pacotes de código pronto que outras pessoas da comunidade disponibilizam, e nós as utilizamos para executar tarefas específicas no código sem termos que reescrever do zero;
- Que para deixar o código mais organizado podemos usar ferramentas de linting, além da importância delas para reforçar estilo e também para prever possíveis bugs

**Links**
- [O que é o node.js?](https://www.youtube.com/watch?v=8VSTrZY8vwI)
- [Node.JS: Descomplicando o trabalho com diferentes versões](https://www.alura.com.br/artigos/descomplicando-o-trabalho-com-node)
- [NPM Docs](https://docs.npmjs.com/)
- [Getting Started: An overview of Markdown, how it works, and what you can do with it.](https://www.markdownguide.org/getting-started/)
- [Markdown: como trabalhar com essa linguagem de markup?](https://www.alura.com.br/artigos/como-trabalhar-com-markdown)
- [Um guia para importação e exportação de módulos com JavaScript](https://www.alura.com.br/artigos/guia-importacao-exportacao-modulos-javascript)

## Na aula-02: Carregamento de arquivos, você aprendeu:
- Que podemos utilizar a lib `fs` (File System, ou sistema de arquivos) nativa do JavaScript para que o programa consiga acessar e ler arquivos do computador;
- Que conseguimos capturar mensagens de erro enviadas pelo Node.js quando algo no programa não sai como o esperado utilizando a palavra-chave `throw`, ou lançar;
- Que as “promessas” são a forma que o JavaScript utiliza para trabalhar com **código assíncrono** e que podemos resolvê-las utilizando em conjunto as palavras-chave `async` e `await` ou o método `.then()`

**Links**
- [O que é o Async/await?](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar)
- [ECMAScript Modules](https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling)
- [Async/await no JavaScript: o que é e quando usar a programação assíncrona?](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar)
- [Por que o JavaScript é assim? | Memes do JavaScript #01](https://www.youtube.com/watch?v=VHxoyduIt18&list=PLh2Y_pKOa4UeJOI2P-N6J8nGyV3aCuO3O&index=2)


## Na aula-03: Capturando links, você aprendeu:
- Como utilizar expressões regulares, uma sintaxe feita para reconhecer padrões de texto, para capturar links e URLs;
- Como utilizamos classes e grupos de expressões regulares para refinar a busca por estes padrões, além dos métodos que o JavaScript tem (por exemplo ``match`` e ``exec``) para trazer os resultados e trabalhar com eles;
- Manipular os resultados extraídos do texto através de expressões regulares e montar um objeto de retorno utilizando a sintaxe do JavaScript e desestruturação de objetos com o spread operator ``...``.

**Links**
- [Regex 101](https://regex101.com/)
- [Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)
- [String](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#)
- [Regex](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Curso de Expressões regulares: capturando textos de forma mágica](https://cursos.alura.com.br/course/expressoes-regulares)
- [Joi](https://joi.dev/)
- [Yup](https://www.npmjs.com/package/yup)
- [Joi Sandbox](https://joi.dev/tester/)

## Na aula-04: Usando a linha de comando, você aprendeu:
- A utilizar a interface de linha de comando e como aplicamos a lib ``process`` do Node.js para capturar e utilizar os dados informados no terminal em nosso código;
- A organizar o código separando em arquivos as funções que lidam com entrada e saída de dados das funções que processam os links;
- Como fazer estes diversos arquivos conversarem entre si através da exportação e importação de módulos com ``import`` e ``export``;
- Que scripts são instruções que usamos para automatizar tarefas e como escrever nossos próprios scripts, incluí-los no arquivo de configuração ``package.json`` e utilizá-los para executar comandos no terminal.

**Links**
- [Node.js v19.5.0 documentation: Path](https://nodejs.org/api/path.html)
- [Curso de HTTP: Entendendo a web por baixo dos panos](https://cursos.alura.com.br/course/http-fundamentos)
- [Node.js v19.5.0 documentation: Errors](https://nodejs.org/api/errors.html)

## Na aula-05: Validando links, você aprendeu:
- Como utilizar acessar URLs com a API ``fetch`` e manipular os dados devolvidos, como o código de status HTTP;
- Utilizar o método ``Promise.all`` para acessar de forma assíncrona um array de URLs e receber o resultado;
- Que a API ``fetch`` é baseada no conceito de promessas em JavaScript, e nessa aula vimos como utiliza o ``async/await`` para resolver as promessas e garantir que o código seja executado de forma assíncrona, retornando os resultados.

**Links**
- [CLI Style Guide](https://devcenter.heroku.com/articles/cli-style-guide)
- [10 design principles for delightful CLIs](https://blog.developer.atlassian.com/10-design-principles-for-delightful-clis/)
- [HTTP: Desmistificando o protocolo da Web](https://www.alura.com.br/artigos/desmistificando-o-protocolo-http-parte-1)
- [npm-run-script](https://docs.npmjs.com/cli/v7/commands/npm-run-script#description)
- [Destructuring em JavaScript](https://www.youtube.com/watch?v=f8a-qwKC5yk)
- [Curso de Node.js: testes unitários e de integração](https://cursos.alura.com.br/course/nodejs-testes-unitarios-integracao)
- [Lidando com erros no Node.js](https://www.alura.com.br/artigos/lidando-com-erros-node-js)
- [npm yargs](https://www.npmjs.com/package/yargs)
- [MDN response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
