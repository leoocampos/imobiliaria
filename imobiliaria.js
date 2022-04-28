let infoCasa
let novaCasa
let botao = document.querySelector("#button-add")
let trashIcon = `<button class="button is-danger is-outlined"><i id="trash" class="fa-solid fa-trash-can"></i></button>`
let templateTabela = `<table class="table is-bordered tabela">
    <thead>
        <tr id="titulo-tabela">
            <th>Número da Residência</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Área da Casa</th>
            <th>Ação</th>
        </tr>
    </thead>
    <tbody id="table-body">
    </tbody>
</table>`

botao.addEventListener("click", function(event){
    event.preventDefault();
    adicionarCasa();
})




