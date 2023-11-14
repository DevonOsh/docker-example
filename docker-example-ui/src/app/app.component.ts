import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  public mealForm: FormGroup = new FormGroup({
    dow: new FormControl(),
    meal: new FormControl(),
    mealName: new FormControl()
  })

  public mealPlan: Array<any> = []

  onSubmit() {
    this.mealPlan.push(this.mealForm.value);
  }
}
