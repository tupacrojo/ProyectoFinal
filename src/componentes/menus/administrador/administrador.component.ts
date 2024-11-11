import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css',
})
export class AdministradorComponent {
  authService = inject(AuthService);
  logout() {
    this.authService.logout();
  }
}
