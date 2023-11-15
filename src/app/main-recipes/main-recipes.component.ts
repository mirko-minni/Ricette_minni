import { Component } from '@angular/core';
import { Recipe } from '../models/receipe';
import { Ingredient } from '../models/receipe';

@Component({
  selector: 'app-main-recipes',
  templateUrl: './main-recipes.component.html',
  styleUrls: ['./main-recipes.component.css']
})
export class MainRecipesComponent {
  ricetteDolci: Recipe[] = [];
  ricetteSalati: Recipe[] = [];
  constructor(){

    const json: any = [];

    this.loadRicette("Dessert", this.ricetteDolci);
    this.loadRicette("Salato", this.ricetteSalati)
  }

  async loadRicette(tipologia: string, ricette: any){
    const request = await fetch('http://localhost:5000/db');
    const db: any = (await request.json()).db;
    
    for (const item of db) {
      if(item.tipologia === tipologia){
        ricette.push(item);
      }
    }
    console.log(ricette);
  }
}
