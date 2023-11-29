import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { MainRecipesComponent } from './main-recipes/main-recipes.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaRicetteComponent } from './lista-ricette/lista-ricette.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    FooterComponent,
    MainRecipesComponent,
    ListaRicetteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
