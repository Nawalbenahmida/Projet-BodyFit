import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {  CategorieComponent } from './categorie/categorie.component';
import { AbdoComponent } from './abdo/abdo.component';
import { CardioComponent } from './cardio/cardio.component';
import { FessierComponent } from './fessier/fessier.component';
import { AuthGuard } from './auth/auth.guard';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'inscription', component: InscriptionComponent},
  {path:'categorie', component: CategorieComponent },
  {path: 'video/abdo', component: AbdoComponent },
  {path: 'video/cardio', component: CardioComponent },
  {path: 'video/fessier', component: FessierComponent },


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
