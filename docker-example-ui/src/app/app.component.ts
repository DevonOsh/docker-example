import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public daysOfWeek: Array<string> = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  public meals: Array<string> = [
    'Breakfast',
    'Lunch',
    'Dinner'
  ]

  onClick() {
    
  }
}
