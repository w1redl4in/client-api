import { Request, Response } from 'express'
import { Cliente, ICliente } from './../models/Cliente'

class clienteController {
    // POST
    public async inserirCliente(
        req: Request,
        res: Response
    ): Promise<Response> {
        try {
            return res.json(await Cliente.create(req.body))
        } catch (err) {
            console.log(err)
        }
    }

    // GET ALL
    public async pegarClientes(req: Request, res: Response): Promise<any> {
        await Cliente.find((err: any, clientes: any) => {
            try {
                res.json(clientes)
            } catch {
                throw err
            }
        })
    }

    // GET ONE
    public async pegarCliente(req: Request, res: Response, next: any) {
        await Cliente.findById(req.params.id, (err, cliente) => {
            err ? res.send(err) : res.json(cliente)
        })
    }

    // PUT
    public async atualizarCliente(req: Request, res: Response) {
        await Cliente.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
            (err, cliente) => {
                err ? res.send(err) : res.json(cliente)
            }
        )
    }

    public async removerCliente(req: Request, res: Response) {
        await Cliente.findOneAndDelete(
            { _id: req.params.id },
            (err, cliente) => {
                err ? res.send(err) : res.json(cliente)
            }
        )
    }
}

export default new clienteController()
