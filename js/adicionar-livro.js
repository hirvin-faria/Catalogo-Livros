var botaoAdicionar = document.querySelector("#adicionar-livro");
console.log(botaoAdicionar);

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();

    var formulario = document.querySelector("#formulario-adicionar-livro");
    console.log(formulario);

    var livro = {
        titulo: formulario.titulo.value,
        genero: formulario.genero.value,
        editora: formulario.editora.value,
        avaliacao: formulario.avaliacao.value
    }

    console.log(livro);

    var livroTr = document.createElement("tr");

    var tituloTd = document.createElement("td");
    var generoTd = document.createElement("td");
    var editoraTd = document.createElement("td");
    var avaliacaoTd = document.createElement("td");

    tituloTd.textContent = livro.titulo;
    generoTd.textContent = livro.genero;
    editoraTd.textContent = livro.editora;
    avaliacaoTd.textContent = livro.avaliacao;
    avaliacaoTd.classList.add("text-center");

    livroTr.appendChild(tituloTd);
    livroTr.appendChild(generoTd);
    livroTr.appendChild(editoraTd);
    livroTr.appendChild(avaliacaoTd);

    console.log(livroTr);

    var tabelaLivros = document.querySelector("#lista-livros");
    tabelaLivros.appendChild(livroTr);

    formulario.reset();
})