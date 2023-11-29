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
  people = 1;
  rangeValue: number = 0;
  constructor(){

    const json: any = [];

    this.loadRicette("Dessert", this.ricetteDolci);
    this.loadRicette("Salato", this.ricetteSalati)
  }

  async loadRicette(tipologia: string, ricette: any) {
    try {
      const request = await fetch('http://localhost:3000/recipes');
      const recipes = await request.json();

      if (recipes && Array.isArray(recipes)) {
        for (const item of recipes) {
          if (item.tipologia === tipologia) {
            ricette.push(item);
          }
        }
        console.log(ricette);
      } else {
        console.error('La risposta del server non contiene un array di ricette valido.');
      }
    } catch (error) {
      console.error('Errore durante il recupero delle ricette:', error);
    }
  }

  peopleChange(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.people = parseInt(value);
  }

  printAmount(amount: string){
    const [amountValue, amountUnit] = amount.split(/(\d+)/).filter(Boolean);
    return (parseInt(amountValue) * this.people) + amountUnit;
  }
}
