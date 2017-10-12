import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { SpotifyService } from './services/spotify.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { SinfotoPipe } from './components/pipes/sinfoto.pipe';
import { ArtistaComponent } from './components/artista/artista.component';
import { DomseguroPipe } from './components/pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    CarouselComponent,
    SinfotoPipe,
    ArtistaComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
