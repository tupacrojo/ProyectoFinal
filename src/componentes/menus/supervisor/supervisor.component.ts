import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaPedidosComponent } from "../../pedidos/lista-pedidos/lista-pedidos.component";

@Component({
  selector: 'app-supervisor',
  standalone: true,
  imports: [RouterModule, ListaPedidosComponent],
  templateUrl: './supervisor.component.html',
  styleUrl: './supervisor.component.css'
})
export class SupervisorComponent {

}
