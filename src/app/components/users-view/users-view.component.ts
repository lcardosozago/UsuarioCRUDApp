import { lastValueFrom } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Usuario } from 'src/app/common/models/usuario.model';
import { UsuarioService } from 'src/app/common/services/usuario.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css'],
  providers: [
    UsuarioService
  ]
})
export class UsersViewComponent implements OnInit {
  usuarioId: number;
  usuario: Usuario;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    this.usuarioId = 0;
    this.usuario = new Usuario();
  }

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');

      if (!idParam) return;

      this.usuarioId = +idParam;

      this.usuarioService
        .obter(this.usuarioId)
        .subscribe((usuario) => {
          if (!usuario) return;

          this.usuario = usuario;
        });
    });
  }

}
