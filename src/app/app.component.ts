import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoleViewerComponent } from '../componentes/role-viewer/role-viewer.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RoleViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ProyectoFinal';
  constructor(private authService: AuthService) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticatedUser();
  }
}
