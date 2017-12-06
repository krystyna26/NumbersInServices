import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
// service = temporary holding place. works like "session"
numbersOne: number[] = [];
numbersTwo: number[] = [];
rand: number;
sum: number;
// a: number;

constructor() { }
//One
  retrieveNumbersOne(): number[] {
    return this.numbersOne;
  }

  addNumberOne(rand:number){
    this.rand = Math.floor(Math.random()*10)+1;
    this.numbersOne.push(this.rand);
  }

 sumOne(){
    this.sum = 0;
    for(var i=0; i< this.numbersOne.length; i++){
      this.sum = this.sum + this.numbersOne[i];
    }
    console.log("in sumOne");
    return this.sum;
  }
//Two
  retrieveNumbersTwo(): number[] {
    return this.numbersTwo;
  }

  addNumberTwo(rand:number){
    this.rand = Math.floor(Math.random()*10)+1;
    this.numbersTwo.push(this.rand);
  }

  sumTwo(){
    this.sum = 0;
    for(var i=0; i< this.numbersTwo.length; i++){
      this.sum = this.sum + this.numbersTwo[i];
    }
    console.log("in sumTwo");
    return this.sum;
  }

  //difference
  difference(){
    return (this.sumOne() - this.sumTwo());
  }
}
