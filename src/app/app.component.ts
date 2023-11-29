import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ricette_minni';
  ricetteFiltrate : any[] = [];
  showFiltered($event: any){
    console.log($event.ricettarioFiltrato);
    this.ricetteFiltrate = $event.ricettarioFiltrato;
  }
}
