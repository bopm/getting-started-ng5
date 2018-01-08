import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import {Routes, RouterModule, Router} from "@angular/router";

import { environment } from './../environments/environment';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers/root';

const routes: Routes = [
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  { path: 'cards', loadChildren: './cards.module#CardsModule'}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
