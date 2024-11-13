import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { RoleViewerComponent } from '../role-viewer/role-viewer.component';
import { ROLES } from '../../../enum/roles';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [ThemeSwitcherComponent, RoleViewerComponent],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css',
})
export class SideNavbarComponent implements OnInit {
  ROLES = ROLES;
  actualRole: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.actualRole = this.authService.getActiveRole() || '';
  }
}
