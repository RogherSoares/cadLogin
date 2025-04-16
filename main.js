// Implementação acesso para a tela de login
function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    //implementa estrutura que testa se todos os campos foram preenchidos
    if(!loginEmail || !loginSenha) {
        alert("Favor preencher todos os campos");
    } else {
        window.location.href = "cadastro.html";
    }
}

//criando variavel tipo array
let dadosLista = [];

function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;
    
    if(nomeUser) {
        dadosLista.push(nomeUser);
        criaLista();
        document.getElementById("nomeUser").value = "";
    } else {
        alert("Favor preencher o campo nome");
    }
}

//função para preecher a lista de cadastro
function criaLista() {
    let tabela = "<tr><th>Nome</th><th>Ações</th></tr>";

    for(let i = 0; i <= (dadosLista.length - 1); i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-warning'>editar</button><butto class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>excuir</butto></td></tr>";

        document.getElementById("tabela").innerHTML = tabela;
    }
}

//função para excuir o nome da lista
function excluir(i) {
    dadosLista.splice((i-1), 1 );
    document.getElementById("tabela").deleteRow(i);
}