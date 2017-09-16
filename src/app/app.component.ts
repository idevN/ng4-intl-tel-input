import { Component } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status: string = '';
  title = 'International Number Input';

  onChange(status: boolean) {
    status ? this.status = 'Valid' : this.status = 'Invalid'; 
  }

}
