import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {  CategorieComponent } from './categorie/categorie.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: ConnexionComponent},
  {path:'register', component: InscriptionComponent},
  {path:'categorie', component: CategorieComponent},
  {path:'video/:categorie', component: VideoComponent},

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
