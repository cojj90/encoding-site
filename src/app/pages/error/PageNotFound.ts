import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `<h1>Hello {{name}}</h1>`
})
export class PageNotFoundComponent {
  name = 'NOT FOUND';
}
