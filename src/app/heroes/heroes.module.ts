// Componentes
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';

// Módulos
import { CommonModule } from '@angular/common';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    ConfirmarComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    HomeComponent,
    ImagenPipe,
    ListadoComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
  ],
})
export class HeroesModule { }
