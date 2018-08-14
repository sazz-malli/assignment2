import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  getCurrentStatus = true;
  inputText = null;

  onClearData() {
    this.inputText = '';
    // if(this.inputText === ''){
    //   console.log(this.inputText);
    //   this.inputText = 'checking IF Condition';
    //   console.log(this.inputText);
    // }else {
    //   this.inputText = 'else';
    }

  }
}
