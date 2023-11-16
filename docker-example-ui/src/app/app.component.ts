import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { APIService } from './api-service.service';
import { Observable, of } from 'rxjs';
import { MealPlan } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    dow: new FormControl('Monday'),
    meal: new FormControl('Breakfast'),
    mealName: new FormControl()
  })

  public mealPlan: Array<MealPlan> = [];

  constructor (private api: APIService) {
    this.api.getCurrentTime().subscribe(response => console.log(response));
  }

  ngOnInit(): void {
      this.getMeals();
  }

  getMeals() {
    this.api.getMeals().subscribe(result => this.mealPlan = result);
  }

  onSubmit() {
    let meal = this.mealForm.value;
    this.api.createMeal(meal.dow, meal.meal, meal.mealName).subscribe(() => this.getMeals());
  }

  onDelete(id: number) {
    this.api.deleteMeal(id).subscribe((result) => { 
        console.log(result)
        this.getMeals()
    });
  }
}
