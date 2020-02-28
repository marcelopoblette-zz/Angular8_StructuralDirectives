import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2 *ngIf = "displayName">Marcelo</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  displayName = false;

  constructor() { }

  ngOnInit(): void {
  }

}
