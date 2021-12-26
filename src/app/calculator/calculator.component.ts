import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public num1: number | undefined;
  public num2: number | undefined;
  public result: number | undefined;

  add (){
    // @ts-ignore
    this.result = this.num1 + this.num2;
  };
  minus (){
    // @ts-ignore
    this.result = this.num1 - this.num2;
  };
  multiply (){
    // @ts-ignore
    this.result = this.num1 * this.num2;
  };
  divide (){
    // @ts-ignore
    this.result = this.num1 / this.num2;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
