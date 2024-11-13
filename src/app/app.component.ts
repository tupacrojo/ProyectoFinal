import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoleViewerComponent } from '../componentes/ui/role-viewer/role-viewer.component';
import { AuthService } from '../services/auth.service';
import { ThemeSwitcherComponent } from '../componentes/ui/theme-switcher/theme-switcher.component';
import { SideNavbarComponent } from '../componentes/ui/side-navbar/side-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RoleViewerComponent,
    ThemeSwitcherComponent,
    SideNavbarComponent,
  ],
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
