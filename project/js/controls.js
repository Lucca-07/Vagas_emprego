function fecharOverlay() {
    let abso = document.getElementById("abso");

    abso.classList.toggle("hidden");
}

function candidatar() {
    let abso = document.getElementById("abso");

    abso.classList.toggle("hidden");
}

function addVaga() {
    let addcard = document.getElementById('addcard');
    let addvaga = document.getElementById('addvaga');
    let abso2 = document.getElementById('abso2');

    addcard.classList.add("hidden");   // esconde o botão "+"
    addvaga.classList.remove("hidden"); // mostra o form já existente
    abso2.classList.remove('hidden');  // mostra o fundo e o form
}

function confirmarVaga() {
    let main = document.getElementById("main");
    let titulo = document.getElementById("titulo");
    let salario = document.getElementById("salario");
    let requisitosInput = document.getElementById("requisitos");
    let requisitos = requisitosInput.value;
    if(requisitos == "" || requisitos == null){
        requisitos = "Nenhum requisito especificado!"
    }
    console.log(requisitos)
    console.log(requisitos.value)


    let abso2 = document.getElementById('abso2');


    function datazero(numero) {
        return numero < 10 ? "0" + numero : numero;
    }

    let data = datazero(new Date().getDate()) + "/" + datazero(new Date().getMonth() + 1) + "/" + new Date().getFullYear();

    let novocard = `
        <div class="card">
            <h2 style="text-align: center;">${titulo.value}</h2>
            <p><strong>Salário:</strong> ${salario.value}</p>
            <p><strong>Requisitos:</strong> ${requisitos}</p>
            <p><strong>Data da vaga:</strong> ${data}</p>
            <button onclick="candidatar()">Quero me candidatar!</button>
        </div>`;



    // Esconde o formulário e mostra o botão de adicionar
    let addcard = document.getElementById('addcard');
    let addvaga = document.getElementById('addvaga');

    if (titulo.value == "" && salario.value == "") {
        document.getElementById('titulovazio').classList.toggle("hidden")
        document.getElementById('salariovazio').classList.toggle("hidden")
    } else if (titulo.value == "") {
        document.getElementById('titulovazio').classList.toggle("hidden")
    } else if (salario.value == "") {
        document.getElementById('salariovazio').classList.toggle("hidden")
    } else {
        addvaga.classList.toggle('hidden');
        addcard.classList.toggle('hidden');
        abso2.classList.toggle('hidden');
        // Adiciona o novo card
        main.innerHTML += novocard;

        titulo.value = "";
        salario.value = "";
        requisitos.value = "";
        requisitosInput.value = "";
        }

}