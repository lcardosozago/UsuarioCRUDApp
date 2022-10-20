import { BaseModel } from "../base/base.model";

export class Usuario extends BaseModel {
    nome: string;
    sobrenome: string;
    email: string;
    dataNascimento: Date;
    escolaridade: string;

    constructor() {
        super();
        this.nome = '';
        this.sobrenome = '';
        this.email = '';
        this.dataNascimento = new Date();
        this.escolaridade = '';
    }
}