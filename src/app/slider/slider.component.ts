import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  REST_API : string = 'http://localhost:3000/recipes';
  ricette : any[] = [];
  ngOnInit(){
    this.caricaRicette()
  }

  async caricaRicette(): Promise<void> {
    const request = await fetch(this.REST_API);
    this.ricette = await request.json();
  }
}
