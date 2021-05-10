import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProductosComponent } from './productos/productos.component';
import { SharedModule } from '../shared/shared.module';
import { ProductoCardComponent } from '../components/producto-card/producto-card.component';
import { ProductoViewComponent } from './producto-view/producto-view.component';
import { RouterModule } from '@angular/router';
import { GestionProductosComponent } from './gestion-productos/gestion-productos.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';

@NgModule({
  declarations: [
    ProductosComponent,
    ProductoCardComponent,
    ProductoViewComponent,
    GestionProductosComponent,
    ProductoEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  exports: [ProductosComponent],
})
export class ScreensModule {}
