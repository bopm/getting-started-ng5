import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Card } from './models/card';
import * as fromRoot from './reducers';
import * as cards from './actions/cards';
import { Store } from '@ngrx/store';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cards$: Observable<Card[]>;

  addCard(card: Card) {
    this.store.dispatch(new cards.Add(card));
  }

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new cards.Load());
    this.cards$ = this.store.select(fromRoot.getCards);
  }
}
