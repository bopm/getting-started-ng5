import { Component } from '@angular/core';
import { CardService } from './services/card.service';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cards$: Observable<Card[]>;
  private card: Card = new Card();

  addCard(cardText: string) {
    this.card.text = cardText;
    this.cardService.createCard(this.card);
    this.card = new Card();
  }

  constructor(private cardService: CardService) {
    this.cards$ = this.cardService.getCardsList();
  }
}
