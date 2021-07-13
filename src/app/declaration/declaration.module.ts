import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { DeclarationRoutingModule } from './declaration-routing.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    DeclarationRoutingModule,
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDK_H25782ntfx8P1phlMxs1KngoieEaYw',
      libraries: ['places']
    })
  ],
  exports: [DeclarationRoutingModule, IonicModule]
})
export class DeclarationModule { }
