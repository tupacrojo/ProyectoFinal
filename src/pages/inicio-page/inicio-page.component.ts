import { Component } from '@angular/core';
import { LoginComponent } from "../../componentes/login/login.component";

@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css'
})
export class InicioPageComponent {

}
