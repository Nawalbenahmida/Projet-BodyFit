import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { MockCategorieService } from './services/mock-categorie.service';
import { InfoVideoService } from './services/info-video.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CardioComponent } from './cardio/cardio.component';
import { FessierComponent } from './fessier/fessier.component';
import { AllVComponent } from './all-v/all-v.component';
import { AbdoComponent } from './abdo/abdo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnexionComponent,
    InscriptionComponent,
    CategorieComponent,
    CardioComponent,
    FessierComponent,
    AllVComponent,
    AbdoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    AccordionModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  providers: [MockCategorieService , InfoVideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
