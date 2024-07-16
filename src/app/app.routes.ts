import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./paginas/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'busqueda',
    loadComponent: () => import('./paginas/busqueda/busqueda.page').then( m => m.BusquedaPage)
  },
  {
    path: 'favoritos',
    loadComponent: () => import('./paginas/favoritos/favoritos.page').then( m => m.FavoritosPage)
  },
];
