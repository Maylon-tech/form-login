
const Main = {

    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },


    cacheSelectors: function() {
        this.userName = document.querySelector('#username')
        this.passWord = document.querySelector('#password')
        this.botao = document.querySelector('#btn')
        this.login = document.querySelector('#formLogin')
     
    },

    bindEvents: function() {
        this.login.onsubmit = function(evento) {
            evento.preventDefault()
            
         this.inputlogin = document.forms['formLogin']['username']
         this.temErro = false
            if(!this.inputlogin.value) {
                this.temErro = true
                this.inputlogin.classList.add('error')
               
            } else {
                this.inputlogin.classList.remove('error')
            }

            this.inputPass = document.forms['formLogin']['password']
            if(!this.inputPass.value) {
                this.temErro = true
                this.inputPass.classList.add('error')

            } else {
                this.inputPass.classList.remove('error')
            }
            if(!temErro) {
                login.submit()
            }
        }
    }

}

Main.init()