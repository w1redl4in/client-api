import { Router, Request, Response } from 'express'
import clienteController from './controllers/clienteController'
import * as swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './../swagger.json'
const routes = Router()

// routes.get('/clientes', clienteController.pegarClientes)
routes.post('/clientes', clienteController.inserirCliente)
routes.get('/clientes', clienteController.pegarClientes)
routes.get('/cliente/:id', clienteController.pegarCliente)
routes.put('/cliente/:id', clienteController.atualizarCliente)
routes.delete('/cliente/:id', clienteController.removerCliente)
routes.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export default routes
