import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-numeric-box',
  templateUrl: './numeric-box.component.html',
  styleUrls: ['./numeric-box.component.scss']
})
export class NumericBoxComponent implements OnInit {
 min = 10;
 max = 20;
 inputValue;
 isErrored;
  constructor() { }

  ngOnInit() {
  }

  checkRange(evt){
    if(this.inputValue > this.max || this.inputValue < this.min){
      this.isErrored = true;
      setTimeout(() => {
        this.isErrored = false;
        if(this.inputValue > this.max){
          this.inputValue = this.max;
        }
        else if(this.inputValue < this.min){
         this.inputValue = this.min;
       }
      }, 500);
    }
   
  }

}
