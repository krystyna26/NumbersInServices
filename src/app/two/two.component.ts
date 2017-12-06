import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  numbers: number[] = [];
  rand: number;
  sum: number;
  
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers = this._dataService.retrieveNumbersTwo();
  }

  // two
  generateRandTwo(){
    this._dataService.addNumberTwo(this.rand);
  }

  sumIt(){
    console.log("in sumIt2");
    this.sum = this._dataService.sumTwo();
  }
}
