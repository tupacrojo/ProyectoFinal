import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonRouteComponent } from '../../ui/button-route/button-route.component';
import { SideNavbarComponent } from "../../ui/side-navbar/side-navbar.component";

@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [RouterModule, ButtonRouteComponent, SideNavbarComponent],
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css',
})
export class VendedorComponent {}
