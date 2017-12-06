import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  numbers: number[] = [];
  rand: number;
  sum: number;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers = this._dataService.retrieveNumbersOne();
  }
// one
  generateRandOne(){
    this._dataService.addNumberOne(this.rand);
  }

  sumIt(){
    console.log("in sumIt");
    this.sum = this._dataService.sumOne();
  }

}
