import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-defference',
  templateUrl: './defference.component.html',
  styleUrls: ['./defference.component.css']
})
export class DefferenceComponent implements OnInit {
// do not store any data in component
  diff: number;
  a: number;
  b: number;

  constructor(private _dataService: DataService) { 
    
  }

  ngOnInit() {
    // code that is run the moment the component is open
  }

  myDifference(){
    this.diff = this._dataService.difference();
  }
  // I can call services by saying: this._DataServices.user (="brendon") / .getUser();

}
