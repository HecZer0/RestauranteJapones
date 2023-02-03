import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { MapComponent } from './map/map.component';
import { CartaComponent } from './carta/carta.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { VegetarianosComponent } from './vegetarianos/vegetarianos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'map', component: MapComponent },

  { path: 'carta', component: CartaComponent, children: [
    { path: 'platillos', component: PlatillosComponent },
    { path: 'bebidas', component: BebidasComponent },
    { path: 'vegetarianos', component: VegetarianosComponent },
  ] },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
