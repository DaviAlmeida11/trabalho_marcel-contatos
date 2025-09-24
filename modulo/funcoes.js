/***************************************************************************************************************************************************************************************** 
 * Obgetivo: arquivo responsavel para criar a API de contatos
 * Data 25/09/2025
 * Autor: Davi de Almeida Santos 
 * Versão 1.0 
 **********************************************************************************************************************************************************************************/

const dados  = require('./contatos.js')
const MESSAGE_ERRO = {status: false, statuscode: 500, developament: 'Davi de Almeida Santos'}

const getListAllDados = function () {
    let message = {status: true, statuscode: 200, developament: 'Davi de Almeida Santos', dados: []}
    dados.contatos['whats-users'].forEach( function (item){
        message.dados.push(item.id)
        message.dados.push(item.account)
        message.dados.push(item.nickname)
        message.dados.push(item['created-since'])
        message.dados.push(item['profile-image'])
        message.dados.push(item.number)
        message.dados.push(item.background)
        message.dados.push(item.contacts)

 

    })
    return message
    

        
    }
   

 

const getListProfileUser = function(idUsuario) {
    let id = !isNaN(idUsuario)
        let message = {status: true, statuscode: 200, developament: 'Davi de Almeida Santos',  dados : id}
        dados.contatos['whats-users'].forEach( function (item){
       if(item.id === idUsuario){
        message.name = item.nickname
        message.iagem = item['profile-image']
        message.fundo = item.background
        message.numero = item.number
       }
    })


            return message
      
    }
    

    

const getListUserDados = function(idUsuario ) {

        let id = !isNaN(idUsuario)
            let message = {status: true, statuscode: 200, developament: 'Davi de Almeida Santos',  dados: id }
            dados.contatos['whats-users'].forEach( function (item){
           if(item.id === idUsuario){
            message.name = item.nickname
            message.imagem = item['profile-image']
            message.descricao = item.contacts[0].description
            
           }
        })
        return message

}  
console.log(getListUserDados(3))

const getListMessagesUser = function() {

}

const getListMessageContatUser = function() {

}

const getPalavrasChaves  = function( ){

}

