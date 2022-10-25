import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  Router,
  TitleStrategy,
} from '@angular/router';
import { Escolaridade } from 'src/app/common/enums/escolaridade.enum';
import { UsuarioService } from 'src/app/common/services/usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
  providers: [FormBuilder, UsuarioService],
})
export class UsersFormComponent implements OnInit {
  usuarioId: number;
  form: FormGroup;
  escolaridades: Escolaridade[];

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.usuarioId = 0;
    this.form = this.formBuilder.group({
      id: [0],
      nome: [''],
      sobrenome: [''],
      email: [''],
      dataNascimento: [''],
      escolaridade: [''],
    });
    this.escolaridades = Object.values(Escolaridade);
  }

  ngOnInit(): void {
    this.carregarUsuario();
  }

  carregarUsuario(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');

      if (!idParam) return;

      this.usuarioId = +idParam;

      this.usuarioService.obter(this.usuarioId).subscribe((usuario) => {
        if (!usuario) return;

        this.form.setValue({
          id: usuario.id,
          nome: usuario.nome,
          sobrenome: usuario.sobrenome,
          email: usuario.email,
          dataNascimento: formatDate(
            usuario.dataNascimento,
            'yyyy-MM-dd',
            this.locale
          ),
          escolaridade: usuario.escolaridade,
        });
      });
    });
  }

  navegarParaListagem(): void {
    this.router.navigate(['/']);
  }

  salvar(): void {
    const formValues = this.form.value;

    if (!this.usuarioId) {
      this.usuarioService
        .criar(formValues)
        .subscribe(() => this.navegarParaListagem());
    }

    if (this.usuarioId) {
      this.usuarioService
        .editar(formValues)
        .subscribe(() => this.navegarParaListagem());
    }
  }
}
