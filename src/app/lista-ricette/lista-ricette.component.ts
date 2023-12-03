import { Component, Input, SimpleChange } from '@angular/core';

import { Recipe } from '../models/receipe';


@Component({
  selector: 'app-lista-ricette',
  templateUrl: './lista-ricette.component.html',
  styleUrls: ['./lista-ricette.component.css']
})
export class ListaRicetteComponent {
  people = 1;
  rangeValue: number = 0;
  @Input() ricette : any[] = [];

 /* ngOnChanges(value: any) {
    const change = value.query as SimpleChange;
    const query = change.currentValue;
    console.log(change, query);
    if (query && query != "") {
        this.ricett = this.Recipes.filter(recipe => recipe.title.toLowerCase().includes(query.toLowerCase()) ||
         recipe.ingredients.filter(item => item.name.toLowerCase().includes(query.toLowerCase())).length > 0);
    }else{
        this.FilteredRecipes = this.Recipes;
    }
  }
*/
  peopleChange(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.people = parseInt(value);
  }

  printAmount(amount: string){
    const [amountValue, amountUnit] = amount.split(/(\d+)/).filter(Boolean);
    if(isNaN(Number(amountValue))){
      return 'qb';
    }
    return (parseInt(amountValue) * this.people) + amountUnit;
  }
}
