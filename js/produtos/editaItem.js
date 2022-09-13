const editaItem = (id) => { 
    return fetch(`http://localhost:3000/item/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
    
        throw new Error('Não foi possível editar o produto')
    })
}

const atualizaItem = (id, url, categoria, nome, preco, desc) => {
    return fetch(`http://localhost:3000/item/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            url: url,
            categoria: categoria,
            nome: nome,
            preco: preco,
            desc: desc
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível editar o produto')
    })
}

(async () => { 
    const pegaURL = new URL(window.location)
  
    const id = pegaURL.searchParams.get('id')

    const inputUrl = document.querySelector('[data-id="url"]')
    const inputCategoria = document.querySelector('[data-id="categoria"]')
    const inputNome = document.querySelector('[data-id="nome"]')
    const inputPreco = document.querySelector('[data-id="preco"]')
    const inputDesc = document.querySelector('[data-id="desc"]')

    try {
        const dados = await editaItem(id)
        inputUrl.value = dados.url
        inputCategoria.value = dados.categoria
        inputNome.value = dados.nome
        inputPreco.value = dados.preco
        inputDesc.value = dados.desc
    }
    catch(erro) {
        console.log(erro)
    }

    const formulario = document.querySelector('[data-id="form"]')

    formulario.addEventListener('submit', async (evento)=> {
        evento.preventDefault()
        try {
            await atualizaItem(id,inputUrl.value, inputCategoria.value, inputNome.value, inputPreco.value, inputDesc.value)
            window.location.href = 'todos-produtos.html'
        }
        catch(erro) {
            console.log(erro)
        }
    })
})()