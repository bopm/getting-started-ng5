import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
<div class="jumbotron">
  <h1 class="display-3" i18n>Cards App</h1>
</div>
  `,
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
