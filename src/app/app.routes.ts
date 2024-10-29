import { Routes } from '@angular/router';
import { ListaProductosComponent } from '../componentes/productos/lista-productos/lista-productos.component';
import { NuevoProductoComponent } from '../componentes/productos/nuevo-producto/nuevo-producto.component';
import { LoginComponent } from '../componentes/login/login.component';

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
        path: '**',
        redirectTo: ''
    }
    
];
  