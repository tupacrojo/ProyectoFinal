import { Routes } from '@angular/router';
import { ListaProductosComponent } from '../componentes/productos/lista-productos/lista-productos.component';
import { NuevoProductoComponent } from '../componentes/productos/nuevo-producto/nuevo-producto.component';
import { LoginComponent } from '../componentes/login/login.component';
import { AdministradorComponent } from '../componentes/menus/administrador/administrador.component';
import { EncargadoComponent } from '../componentes/menus/encargado/encargado.component';
import { SupervisorComponent } from '../componentes/menus/supervisor/supervisor.component';
import { VendedorComponent } from '../componentes/menus/vendedor/vendedor.component';
import { ListaVentasComponent } from '../componentes/ventas/lista-ventas/lista-ventas.component';
import { NuevaVentaComponent } from '../componentes/ventas/nueva-venta/nueva-venta.component';
import { ModificarProductoComponent } from '../componentes/productos/modificar-producto/modificar-producto.component';
import { NuevoPedidoComponent } from '../componentes/pedidos/nuevo-pedido/nuevo-pedido.component';
import { NuevoReporteComponent } from '../componentes/reportes/nuevo-reporte/nuevo-reporte.component';
import { ListaReportesComponent } from '../componentes/reportes/lista-reportes/lista-reportes.component';
import { NuevoUsuarioComponent } from '../componentes/usuarios/nuevo-usuario/nuevo-usuario.component';
import { ListaUsuarioComponent } from '../componentes/usuarios/lista-usuario/lista-usuario.component';
import { ListaPedidosComponent } from '../componentes/pedidos/lista-pedidos/lista-pedidos.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'AgregarProducto',
    component: NuevoProductoComponent,
  },
  {
    path: 'ListaProductos',
    component: ListaProductosComponent,
  },
  {
    path: 'ModificarProducto/:id',
    component: ModificarProductoComponent,
  },
  {
    path: 'MenuAdministrador',
    component: AdministradorComponent,
  },
  {
    path: 'MenuEncargado',
    component: EncargadoComponent,
  },
  {
    path: 'MenuSupervisor',
    component: SupervisorComponent,
  },
  {
    path: 'MenuVendedor',
    component: VendedorComponent,
  },
  {
    path: 'ListaVentas',
    component: ListaVentasComponent,
  },
  {
    path: 'NuevaVenta',
    component: NuevaVentaComponent,
  },
  {
    path: 'NuevoPedido',
    component: NuevoPedidoComponent,
  },
  {
    path: 'ListarPedido',
    component: ListaPedidosComponent,
  },
  {
    path: 'NuevoReporte',
    component: NuevoReporteComponent,
  },
  {
    path: 'ListaReporte',
    component: ListaReportesComponent,
  },
  {
    path: 'ListaUsuarios',
    component: ListaUsuarioComponent
  },
  {
    path: 'NuevoUsuario',
    component: NuevoUsuarioComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];
