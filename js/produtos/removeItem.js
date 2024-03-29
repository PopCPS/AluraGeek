const removeItem = (id) => {
    return fetch(`http://localhost:3000/item/${id}`, {
        method: 'DELETE'
    })
    .then(resposta => {
        if(!resposta.ok) {
            throw new Error('Não foi possivel deletar o item')
        }
    })
}

const lista = document.querySelector('[data-id="todosProdutos"]')

lista.addEventListener('click', async (evento) => {
    let botaoDeleta = evento.target.className === 'produto__delete'
    if(botaoDeleta) {
        try {
            const item = evento.target.closest('.produto')
            let id = item.dataset.id
            await removeItem(id)
            item.remove()
        }
        catch(erro) {
            console.log(erro)
        }
    }
})

