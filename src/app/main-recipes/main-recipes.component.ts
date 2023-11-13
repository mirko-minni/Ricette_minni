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
  constructor(){

    const json: any = [];

    this.loadRicette();

  }

  async loadRicette(){
    const request = await fetch('http://localhost:3000/db');
    const db: any = (await request.json()).db;
    
    for (const item of db) {
      if(item.tipologia === "Dessert"){
        this.ricetteDolci.push(item);
      }
    }
    console.log(this.ricetteDolci);
  }
}
