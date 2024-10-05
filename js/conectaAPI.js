//funcao assincrincroa ele vai espera o que o await para fazer a funcao
async function listaVideos() {
    //o fetch ele retorna uma resposta nao um promessa  e faz uma requisaição get so ler os valores
    const conexao = await fetch("http://localhost:3000/videos");
    //pega os dados em bites e forma em um objeto
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaVideos(titulo, descricao, url, imagem) {
    const conexao = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if(!conexao.ok){
        throw new Error('Não foi possível enviar o Vídeo')
        
    }
    const conexaoConvertida = await conexao.JSON();
    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaAPI = {
    listaVideos,
    criaVideos,
    buscaVideo
}