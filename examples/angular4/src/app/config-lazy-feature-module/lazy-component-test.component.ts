import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-component-test',
  template: `
    <h1>Lazy Loaded Feature Module</h1>
    <h2>Configure </h2>
    <star-rating-comp></star-rating-comp>
  `
})
export class LazyComponentTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
