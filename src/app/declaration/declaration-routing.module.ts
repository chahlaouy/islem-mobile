import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { LocalizationComponent } from './localization/localization.component';


const routes: Routes = [
  {
    path: 'address',
    component: LocalizationComponent
  },
  {
    path: 'description',
    component: LocalizationComponent
  },
  
  
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule],
})
export class DeclarationRoutingModule {}