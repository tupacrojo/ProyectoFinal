import { Routes } from '@angular/router';
import { InicioPageComponent } from '../pages/inicio-page/inicio-page.component';
import { AgregarProductoPageComponent } from '../pages/agregar-producto-page/agregar-producto-page.component';
import { ModificarProductoPageComponent } from '../pages/modificar-producto-page/modificar-producto-page.component';
import { ListaPorductosPageComponent } from '../pages/lista-porductos-page/lista-porductos-page.component';
import { MenuAdminPageComponent } from '../pages/menu-admin-page/menu-admin-page.component';
import { MenuEncargadoPageComponent } from '../pages/menu-encargado-page/menu-encargado-page.component';
import { MenuSupervisorPageComponent } from '../pages/menu-supervisor-page/menu-supervisor-page.component';
import { MenuVendedorPageComponent } from '../pages/menu-vendedor-page/menu-vendedor-page.component';
import { ListaVentasPageComponent } from '../pages/lista-ventas-page/lista-ventas-page.component';
import { NuevaVentaPageComponent } from '../pages/nueva-venta-page/nueva-venta-page.component';
import { NuevoPedidoPageComponent } from '../pages/nuevo-pedido-page/nuevo-pedido-page.component';
import { ListaPedidosPageComponent } from '../pages/lista-pedidos-page/lista-pedidos-page.component';
import { NuevoReportePageComponent } from '../pages/nuevo-reporte-page/nuevo-reporte-page.component';
import { ListaReportesPageComponent } from '../pages/lista-reportes-page/lista-reportes-page.component';
import { ListaUsuarioPageComponent } from '../pages/lista-usuario-page/lista-usuario-page.component';
import { NuevoUsuarioPageComponent } from '../pages/nuevo-usuario-page/nuevo-usuario-page.component';
import { CargarRemitoPageComponent } from '../pages/cargar-remito-page/cargar-remito-page.component';

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
    component: MenuSupervisorPageComponent,
  },
  {
    path: 'MenuVendedor',
    component: MenuVendedorPageComponent,
  },
  {
    path: 'ListaVentas',
    component: ListaVentasPageComponent,
  },
  {
    path: 'NuevaVenta',
    component: NuevaVentaPageComponent,
  },
  {
    path: 'NuevoPedido',
    component: NuevoPedidoPageComponent,
  },
  {
    path: 'ListarPedido',
    component: ListaPedidosPageComponent,
  },
  {
    path: 'NuevoReporte',
    component: NuevoReportePageComponent,
  },
  {
    path: 'ListaReporte',
    component: ListaReportesPageComponent,
  },
  {
    path: 'ListaUsuarios',
    component: ListaUsuarioPageComponent
  },
  {
    path: 'NuevoUsuario',
    component: NuevoUsuarioPageComponent
  },
  {
    path:'CargarRemito',
    component: CargarRemitoPageComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];
