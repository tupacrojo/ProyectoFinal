import { Routes } from '@angular/router';
import { ListaProductosComponent } from '../componentes/productos/lista-productos/lista-productos.component';
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
import { CargarRemitoComponent } from '../componentes/pedidos/cargar-remito/cargar-remito.component';
import { InicioPageComponent } from '../pages/inicio-page/inicio-page.component';
import { AgregarProductoPageComponent } from '../pages/agregar-producto-page/agregar-producto-page.component';
import { ModificarProductoPageComponent } from '../pages/modificar-producto-page/modificar-producto-page.component';
import { ListaPorductosPageComponent } from '../pages/lista-porductos-page/lista-porductos-page.component';
import { MenuAdminPageComponent } from '../pages/menu-admin-page/menu-admin-page.component';
import { MenuEncargadoPageComponent } from '../pages/menu-encargado-page/menu-encargado-page.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioPageComponent,
  },
  {
    path: 'AgregarProducto',
    component: AgregarProductoPageComponent,
  },
  {
    path: 'ListaProductos',
    component: ListaPorductosPageComponent,
  },
  {
    path: 'ModificarProducto/:id',
    component: ModificarProductoPageComponent,
  },
  {
    path: 'MenuAdministrador',
    component: MenuAdminPageComponent,
  },
  {
    path: 'MenuEncargado',
    component: MenuEncargadoPageComponent,
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
    path:'CargarRemito',
    component: CargarRemitoComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];
