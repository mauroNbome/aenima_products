import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, HomeComponent, ProductosComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [LoginComponent, HomeComponent, ProductosComponent],
})
export class ScreensModule {}
