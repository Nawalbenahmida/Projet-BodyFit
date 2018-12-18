import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CategorieService } from './services/categorie.service';
import { InfoVideoService } from './services/info-video.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CardioComponent } from './cardio/cardio.component';
import { FessierComponent } from './fessier/fessier.component';
import { AbdoComponent } from './abdo/abdo.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnexionComponent,
    InscriptionComponent,
    CategorieComponent,
    CardioComponent,
    FessierComponent,
    AbdoComponent,

  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
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
    MatMenuModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategorieService , InfoVideoService, AuthGuard, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
