import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RicetteServiceService {

  constructor() { }
  visible : boolean = true;
  setVisible(value: boolean){
    this.visible = value;
  }
}
