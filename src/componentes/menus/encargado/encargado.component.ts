import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-encargado',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './encargado.component.html',
  styleUrl: './encargado.component.css',
})
export class EncargadoComponent {
  authService = inject(AuthService);
  logout() {
    this.authService.logout();
  }
}
