class NovaCasa {
    constructor(){
        this.numero = document.querySelector("#numero").value
        this.bairro = document.querySelector("#bairro").value
        this.cidade = document.querySelector("#cidade").value
        this.area = document.querySelector("#area").value
    }

    alertaCampoVazio() {
        Swal.fire({
            icon: 'error',
            title: 'Preencha todos os campos!',
            text: 'Você não pode deixar os campos vazios',
            allowOutsideClick: false
          })
    }

    validarCampos(){
        if (this.numero == "" || this.area == "" || this.bairro == "" || this.cidade == "") {
            return true
        } return false
    }
}