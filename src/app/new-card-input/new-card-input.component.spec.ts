import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardInputComponent } from './new-card-input.component';

describe('NewCardInputComponent', () => {
  let component: NewCardInputComponent;
  let fixture: ComponentFixture<NewCardInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCardInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
