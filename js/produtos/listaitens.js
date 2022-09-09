const listaClientes = () =>  {
    return fetch(`http://localhost:3000/item`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os itens')
    })
}

const criaNovoItem = (url, nome, preco) => {
    const novaTr = document.createElement('li')
    const conteudo = `
        <img class="produto__imagem" src="${url}" alt="${nome}">
        <div class="produto__editDelete">
            <button class="produto__edit" data-id="edit"></button>
            <button class="produto__delete" data-id="delete"></button>
        </div>
        <p>${nome}</p>
        <p class="produto__preco">${preco}</p>
        `
    novaTr.classList.add('produto')
    novaTr.innerHTML = conteudo
    return novaTr
}

const tabela = document.querySelector('[data-id="todosProdutos"]')

const render = async () => {
    try {
        const listaItens = await listaClientes()
        listaItens.forEach(elemento => {
            tabela.appendChild(criaNovoItem(elemento.url, elemento.nome, elemento.preco))
    })
    }
    catch(erro){
        console.log(erro)
    }
}

render()