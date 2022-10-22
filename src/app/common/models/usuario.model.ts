import { BaseModel } from "../base/base.model";
import { Escolaridade } from "../enums/escolaridade.enum";

export class Usuario extends BaseModel {
    nome: string;
    sobrenome: string;
    email: string;
    dataNascimento: Date;
    escolaridade?: Escolaridade;

    constructor() {
        super();
        this.nome = '';
        this.sobrenome = '';
        this.email = '';
        this.dataNascimento = new Date();
    }
}
