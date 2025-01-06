const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' /* Append*/});
}
// fs.writeFile(caminhoArquivo, 'Frase 1', { flag: 'w' /* Apaga tudo se estiver algo*/, encoding: 'utf8'});
// fs.writeFile(caminhoArquivo, json, { flag: 'a' /* Append*/, encoding: 'utf8'});

