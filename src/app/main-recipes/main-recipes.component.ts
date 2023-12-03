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
  REST_API : string = 'http://localhost:3000/recipes';
  showEditForm : boolean = false;
  showMessageForm : boolean = false;
  showAddForm : boolean = false;
  ricettaModificata !: Recipe;
  ricettaInserita : any = {
    name: '',
    description: '',
    tipologia: '',
    imagePath: '',
    ingredients: [{name : '', amount: ''}],
    difficulty: '',
    time_executing: '',
    instructions: ''
  };
  message : string = '';
  constructor(){

    const json: any = [];

    this.loadRicette("Dessert", this.ricetteDolci);
    this.loadRicette("Salato", this.ricetteSalati)
  }

  async loadRicette(tipologia: string, ricette: any) {
    try {
      const request = await fetch(this.REST_API);
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
    let [amountValue, amountUnit] = amount.split(/(\d+)/).filter(Boolean);
    if(isNaN(Number(amountValue))){
      return 'qb';
    }
    return (parseInt(amountValue) * this.people) + amountUnit;
  }

  async btnElimina(id : Number){
    try {
      await fetch(this.REST_API + "/" + id.toString(), {method:"DELETE"});
    } catch (error) {
      console.log('Qualcosa è andato storto, riprova tra poco...')
    }
  }

  btnModifica(ricetta : Recipe){
    this.showEditForm = true;
    this.ricettaModificata = { ...ricetta};
    console.log(this.ricettaModificata.ingredients);
  }
  async saveEdit(ricettaModificata : Recipe){
    const body = JSON.stringify(ricettaModificata);
    try {
      await fetch(this.REST_API + '/' + ricettaModificata.id , {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
    } catch (error) {
      console.log('Impossibile eseguire la tua richiesta, ci dispiace. Potrebbe essere un errore temporaneo, riprova tra poco...')
    }
    this.showEditForm = false;
  }

  pushIngredient(){
    this.ricettaModificata.ingredients.push({
      name: '',
      amount: '',
    });
  }
  closeEditor(){
    if(this.showEditForm = true){ this.showEditForm = false; }
    if(this.showAddForm = true){ this.showAddForm = false; }
  }

  btnAggiungi(){
    if(this.showEditForm = true){
      this.showEditForm = false;
      this.showAddForm = true;
    }else{ this.showAddForm = true };
  }

  ricette : Recipe[] = [];
  async caricaRicette(): Promise<void> {
    const request = await fetch(this.REST_API);
    this.ricette = await request.json();
  }
  async savePush(){
    try {
      await fetch(this.REST_API, {
      method: 'POST',
      headers:{ 'Content-Type': 'application/json',},
      body: JSON.stringify(this.ricettaInserita),
    });
    } catch (error) {
      console.log('Errore inserimento ricetta...');
    }
    this.showAddForm = false;
  }
  pushIngredient_add(){
    this.ricettaInserita.ingredients.push({
      name: '',
      amount: '',
    });
  }
}
