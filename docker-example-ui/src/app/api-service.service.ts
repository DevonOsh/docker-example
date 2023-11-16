import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MealPlan } from './model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  public getCurrentTime() {
    return this.http.get('/currentTime');
  }

  public getMeals(): Observable<Array<MealPlan>> {
    return this.http.get<Array<MealPlan>>('/mealPlans');
  }

  public createMeal(dow: string, meal: string, mealName: string) {
    let mealPlan = {
        dow,
        meal,
        mealName
    }
    return this.http.post('/mealPlans', mealPlan);
  }

  public deleteMeal(id: number) {
    return this.http.delete('/mealPlans/'+id);
  }
}
