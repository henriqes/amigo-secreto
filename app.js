const nomes = [];

function adicionarAmigo() {
    var input = document.getElementById("amigo");
    var amigo = input.value.trim();

    if (amigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    nomes.push(amigo);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    var ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    for (var i = 0; i < nomes.length; i++) {
        var li = document.createElement("li");
        li.textContent = nomes[i];
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert("Não há nomes para sortear");
        return;
    }

    var indiceSorteado = Math.floor(Math.random() * nomes.length);
    var nomeSorteado = nomes[indiceSorteado];

    var resultado = document.getElementById("resultado");
        resultado.innerHTML = "<li>O amigo sorteado foi: <strong>" + nomeSorteado + "</strong></li>";
}