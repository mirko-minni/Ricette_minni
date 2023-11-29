import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(){}
  query: string = '';
  ricette : any[] = [];
  @Output() filterChange = new EventEmitter <any>()
  
  ngOnInit(){
    this.caricaRicette()
  }

  async caricaRicette(): Promise<void> {
    const request = await fetch('http://localhost:3000/recipes');
    this.ricette = await request.json();
  }

  getFilteredRicette(): any[] {
    const term = this.query.toLowerCase();
    let ricettario = this.ricette;
    ricettario = ricettario.filter(ricetta =>
      ricetta.name.toLowerCase().indexOf(term) !== -1 ||
      ricetta.ingredients.some((ingrediente: any) =>
        ingrediente.name.toLowerCase().includes(term)
      )
    );
    this.filterChange.emit({event:event, ricettarioFiltrato: ricettario});
    return ricettario;
  }
}
