import {Component, EventEmitter, OnInit, OnDestroy, Output, HostListener} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { takeWhile, debounceTime, filter } from 'rxjs/operators';
import { Card } from '../models/card';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.scss'],
  host: {'class': 'col-4'}
})
export class NewCardInputComponent implements OnInit, OnDestroy {
  private alive = true;
  @Output() onCardAdd = new EventEmitter<Card>();

  newCardForm: FormGroup;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Enter' && this.newCardForm.valid) {
      this.addCard(this.newCardForm.controls['text'].value);
     }
  }

  constructor(fb: FormBuilder) {
    this.newCardForm = fb.group({
      'text': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
    });

    this.newCardForm.valueChanges.pipe(
      filter((value) => this.newCardForm.valid),
      debounceTime(500),
      takeWhile(() => this.alive)
    ).subscribe(data => {
       console.log(data);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }

  addCard(text) {
    this.onCardAdd.emit(new Card(text));
    this.newCardForm.controls['text'].setValue('');
  }

}
