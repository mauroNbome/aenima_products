import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './screens/productos/productos.component';
import { ProductoViewComponent } from './screens/producto-view/producto-view.component';
import { GestionProductosComponent } from './screens/gestion-productos/gestion-productos.component';
import { ProductoEditComponent } from './screens/producto-edit/producto-edit.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'producto-view/:id', component: ProductoViewComponent },
  { path: 'gestion-productos', component: GestionProductosComponent },
  { path: 'producto-edit/:id', component: ProductoEditComponent },

  { path: '**', redirectTo: '/productos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
