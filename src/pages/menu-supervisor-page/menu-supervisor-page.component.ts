import { Component } from '@angular/core';
import { SupervisorComponent } from "../../componentes/menus/supervisor/supervisor.component";

@Component({
  selector: 'app-menu-supervisor-page',
  standalone: true,
  imports: [SupervisorComponent],
  templateUrl: './menu-supervisor-page.component.html',
  styleUrl: './menu-supervisor-page.component.css'
})
export class MenuSupervisorPageComponent {

}
