import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent {
  
  constructor(private readonly router: Router){}

  goToPlatillos(): void {
    this.router.navigate(['platillos'])
  }
  goToBebidas(): void {
    this.router.navigate(['bebidas'])
  }
  goToVegetarianos(): void {
    this.router.navigate(['vegetarianos'])
  }
}
