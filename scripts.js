const button = document.querySelector(".botao")
const input = document.querySelector(".caixa1")
const listaTarefa = document.querySelector(".list-test")

let minhaListaDeItens = []

function AdicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })


    input.value = ''
    mostarTarefas()

}

function mostarTarefas() {
    let novaLi = ''


    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
            <img src="./img/checked.png" alt="check-na-tarefa" onclick= "aConcluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletarItem(${posicao})">
        </li>
    `
    })
    listaTarefa.innerHTML = novaLi


    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function aConcluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    mostarTarefas()
}



function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)
    mostarTarefas()


}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }

    mostarTarefas()
}

recarregarTarefas()



button.addEventListener('click', AdicionarNovaTarefa)



