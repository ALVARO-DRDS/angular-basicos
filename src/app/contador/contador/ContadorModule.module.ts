import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador.component';
import { ListadoComponent } from '../../heroes/listado/listado.component';

@NgModule({
  declarations:[
      ContadorComponent,
    
  ],
  exports:[
    ContadorComponent
  ]

})

export class ContadorModule {}