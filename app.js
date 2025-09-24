/*************************************************************************************************************************************************************************************
 * Data: 24/09/2025
 * autor: Davi de Almeida Santos
 * Versão 1.0
 * 
 * 
 * Observações =: instalar dependencias para criar api
 *  express     - npm install express     -- save instala as dependencias para criar um API
 *  cors        - npm isntall cors        -- save instala as dependencias para configurar os protocoos de uma API
 *  body-parser - npm install body-parser -- save  instala as dependencias para receber os tipos de dados por via POST ou PUT
 **********************************************************************************************************************************************************************************************/
const express   = require('express')
const cors      = require('cors')
const bodyParser = require('body-parser')

const dados     = require('./modulo/funcoes')
//define a porta padrão da api, se for em um servidor de nuvem  não temos acesso a porta 
const PORT      = process.PORT || 8080  

const app = express()

