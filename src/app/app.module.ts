import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnexionComponent,
    InscriptionComponent,
    CategorieComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    AccordionModule,
    BrowserAnimationsModule
  ],
  providers: [MockCategorieService , InfoVideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
