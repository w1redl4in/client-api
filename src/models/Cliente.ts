import * as mongoose from 'mongoose'

export interface ICliente extends mongoose.Document {
    nome: string
    email: string
    cpf: string
}

const clienteSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    cpf: {
        type: String,
        unique: true
    }
})

export const Cliente = mongoose.model<ICliente>('Cliente', clienteSchema)
