import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css',
})
export class VendedorComponent {
  authService = inject(AuthService);
  logout() {
    this.authService.logout();
  }
}
