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
        console.log(dadosLista);
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
        tabela += "<tr><th>" + dadosLista[i] + "</th><th>Ações</th></tr>";

        document.getElementById("tabela").innerHTML = tabela;
    }
}