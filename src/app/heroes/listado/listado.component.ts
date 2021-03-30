import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {
 
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Goku']
  heroeBorrado: string = '';

  borrarHeroe() {
    // se pone un constante para almacenar el borrado
    // const heroeBorrado = this.heroes.shift();
    // console.log(heroeBorrado); 
    // this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
   }

  }




