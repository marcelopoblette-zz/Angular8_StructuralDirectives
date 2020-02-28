import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  <div *ngFor="let color of colors; index as i; first as f; last as l; odd as o; even as e">
  <h2>{{l}} {{f}} {{i}} {{color}} impar {{o}} par {{e}}</h2>
  </div>
 
  


  



  
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public colors = ["orange", "red", "blue", "green", "yellow"];


  constructor() { }

  ngOnInit(): void {
  }

}
