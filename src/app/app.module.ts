import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { NewCardInputComponent } from './new-card-input/new-card-input.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CardService } from './services/card.service';

import { environment } from './../environments/environment';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers/index';
import { CardsEffects } from './effects/cards.effects';
import { AboutComponent } from './about/about.component';

import {Routes, RouterModule, Router} from "@angular/router";
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'cards', pathMatch: 'full'},
  {path: 'cards', component: MainComponent},
  {path: 'about', component: AboutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    NewCardInputComponent,
    AboutComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CardsEffects]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
