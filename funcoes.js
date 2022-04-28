function montaTd (dado){
    td = document.createElement("td");
    if (dado == trashIcon){
        td.innerHTML = trashIcon;
        td.classList.add("buttonRemove");
        td.setAttribute("onclick", "removerCasa()")
    }
    else td.textContent = dado;
    return td;
}

function montaTr (casa) {

   let casaTr = document.createElement("tr");
   casaTr.setAttribute("id", "linha-tabela");

   casaTr.appendChild(montaTd(casa.numero));
   casaTr.appendChild(montaTd(casa.bairro));
   casaTr.appendChild(montaTd(casa.cidade));
   casaTr.appendChild(montaTd(casa.area));
   casaTr.appendChild(montaTd(trashIcon));
   return casaTr; 
}

function msgCasaExcluida(){
    Swal.fire({
        icon: 'success',
        title: 'Item excluído com sucesso!',
        showConfirmButton: false,
        timer: 1500,
        allowOutsideClick: false
      })
}

function msgCasaAdicionada() {
    Swal.fire({
        icon: 'success',
        title: 'Casa adicionada com sucesso!',
        showConfirmButton: false,
        timer: 1000,
        allowOutsideClick: false
      })
}

function confirmarExclusao (TR){
    Swal.fire({
        icon: 'question',
        title: 'Tem certeza que deseja excluir?',
        showDenyButton: true,
        denyButtonText: `Não`,
        confirmButtonText: 'Sim!',
      }).then((result) => {
        if (result.isConfirmed) {
            TR.classList.add("fadeout")
            setTimeout (function(){
                TR.remove()
                exibirResults();
            }, 300)
        }
    })
}

function removerCasa(){
    let tag = event.target.parentNode
    let TR
    if (tag.tagName == "TD") {
        TR = tag.parentNode
        confirmarExclusao(TR)
    } else if (tag.tagName == "BUTTON") {
        tag = tag.parentNode
        TR = tag.parentNode
        confirmarExclusao(TR)
    }
}

function adicionarCasa(){
    infoCasa = new NovaCasa();
    if (infoCasa.validarCampos()){
        infoCasa.alertaCampoVazio()
    } else {
        document.getElementById("noResults").classList.add("hidden");
        switch (verificarTabelaExistente()) {
            case true:
                concluirAdicaoCasa();
                break;
            case false: 
                mostrarTabela();
                concluirAdicaoCasa();
                break;
        }
    }
}

function mostrarTabela(){
    let body = document.querySelector("body")
    let newSection = document.createElement("section")
    newSection.setAttribute("id", "tabela")
    newSection.classList.add("conter");
    newSection.innerHTML = templateTabela
    body.appendChild(newSection)
}

function verificarTabelaExistente(){
    let sectionTable = document.querySelector("#tabela")
    if (sectionTable == null) {
        return false
    } else return true
}

function concluirAdicaoCasa() {
    novaCasa = montaTr(infoCasa);
    let tabela = document.querySelector("#table-body")
    tabela.appendChild(novaCasa);
    document.querySelector(".formulario").reset();
    msgCasaAdicionada();
}

function exibirResults() {
    debugger
    let linha = document.querySelectorAll("#linha-tabela")
    if (linha.length == 0) {
        let tabela = document.getElementById("tabela");
        tabela.classList.add("fadeout")
        setTimeout (function() {
            tabela.remove();
            let noResults = document.getElementById("noResults")
            noResults.classList.remove("hidden");
        }, 300)
    }
}