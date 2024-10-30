import { Routes } from '@angular/router';
import { ListaProductosComponent } from '../componentes/productos/lista-productos/lista-productos.component';
import { NuevoProductoComponent } from '../componentes/productos/nuevo-producto/nuevo-producto.component';
import { LoginComponent } from '../componentes/login/login.component';
import { AdministradorComponent } from '../componentes/menus/administrador/administrador.component';
import { EncargadoComponent } from '../componentes/menus/encargado/encargado.component';
import { SupervisorComponent } from '../componentes/menus/supervisor/supervisor.component';
import { VendedorComponent } from '../componentes/menus/vendedor/vendedor.component';

export const routes: Routes = [ 
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'AgregarProducto',
        component: NuevoProductoComponent
    },
    {
        path: 'ListaProductos',
        component: ListaProductosComponent
    },
    {
        path: 'MenuAdministrador',
        component: AdministradorComponent
    },
    {
        path: 'MenuEncargado',
        component: EncargadoComponent
    },
    {
        path: 'MenuSupervisor',
        component: SupervisorComponent
    },
    {
        path: 'MenuVendedor',
        component: VendedorComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
    
];
  