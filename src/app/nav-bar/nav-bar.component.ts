import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RicetteServiceService } from '../ricette-service.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private ricetteService : RicetteServiceService){}
  query: string = '';
  showElements : any = true;
  
  cercaRicetta() {
    this.showElements = this.ricetteService.setVisible(false);
    console.log('Valore dell\'input:', this.query);
  }
}
