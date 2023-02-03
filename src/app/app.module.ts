import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { MapComponent } from './map/map.component';
import { CartaComponent } from './carta/carta.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { PlatillosComponent } from './platillos/platillos.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { VegetarianosComponent } from './vegetarianos/vegetarianos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardsComponent,
    MapComponent,
    CartaComponent,
    ContactoComponent,
    NosotrosComponent,
    FooterComponent,
    PlatillosComponent,
    BebidasComponent,
    VegetarianosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
