const criaItem = (url, categoria,  nome, preco, desc) => { 
    return fetch(`http://localhost:3000/item`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
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
            return resposta.body
        }
        throw new Error('Não foi possível criar o item')
    })
}

const form = document.querySelector('[data-id="form"]')

form.addEventListener('submit', async (evento) => {
    evento.preventDefault()
    try {
        const url = evento.target.querySelector('[data-id="url"]').value
        const categoria = evento.target.querySelector('[data-id="categoria"]').value
        const nome = evento.target.querySelector('[data-id="nome"]').value
        const preco = evento.target.querySelector('[data-id="preco"]').value
        const desc = evento.target.querySelector('[data-id="desc"]').value

        await criaItem(url, categoria, nome, preco, desc)
        window.location.href = '../telas/todos-produtos.html'
    }
    catch (erro) {
        console.log(erro)
    }
})