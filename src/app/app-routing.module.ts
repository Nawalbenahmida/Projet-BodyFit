import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {  CategorieComponent } from './categorie/categorie.component';
import { AbdoComponent } from './abdo/abdo.component';
import { CardioComponent } from './cardio/cardio.component';
import { AllVComponent } from './all-v/all-v.component';
import { FessierComponent } from './fessier/fessier.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'inscription', component: InscriptionComponent},
  {path:'categorie', component: CategorieComponent},
  {path: 'video/abdo', component: AbdoComponent},
  {path: 'video/cardio', component: CardioComponent},
  {path: 'video/allVideo', component: AllVComponent},
  {path: 'video/fessier', component: FessierComponent},


];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
