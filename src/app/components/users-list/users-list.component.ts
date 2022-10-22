import { lastValueFrom } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/common/models/usuario.model';
import { UsuarioService } from 'src/app/common/services/usuario.service';
import { Escolaridade } from 'src/app/common/enums/escolaridade.enum';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [UsuarioService],
})
export class UsersListComponent implements OnInit {
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) {
    this.usuarios = [];
  }

  ngOnInit(): void {
    this.listar();
  }

  async listar(): Promise<void> {
    this.usuarioService.listar().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  async excluir(usuarioId: number): Promise<void> {
    this.usuarioService.excluir(usuarioId).subscribe(() => {
      this.listar();
    });
  }
}
