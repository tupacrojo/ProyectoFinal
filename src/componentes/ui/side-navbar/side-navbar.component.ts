import { Component } from '@angular/core';
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";
import { RoleViewerComponent } from "../role-viewer/role-viewer.component";

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [ThemeSwitcherComponent, RoleViewerComponent],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {

}
