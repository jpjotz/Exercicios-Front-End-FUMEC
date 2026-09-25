const tarefas = [];
const adicionarBtn = document.getElementById('adicionar');
const tarefasDiv = document.getElementById('tarefas');

adicionarBtn.addEventListener('click', () => {
    adicionarTarefa();
});

function adicionarTarefa() {
    const tarefa = document.getElementById('tarefa').value;
    tarefas.push(tarefa);
    listarTarefas();
}

function listarTarefas() {
    tarefasDiv.textContent = '';

    for (const [indice, tarefa] of tarefas.entries()) {
        tarefasDiv.innerHTML += `
            <ul class="item"> <li>${tarefa}</li> <button class="removerBtn" onClick="removerTarefa(${indice})">Remover</button> </ul>
        `
    }
}

function removerTarefa(indice) {
    tarefas.splice(indice, 1);
    listarTarefas();
}