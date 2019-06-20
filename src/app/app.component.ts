import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myNumValue = 100;
  title = 'numeric-box';
  onBlur(e){
    console.log('test', e);
  }
}
