import { action, computed, observable } from "mobx";
import { Meal } from "./Types";

const food = { name: "", amount: 100, carbs: 0, fats: 0, protein: 0, alcohol:0 };
const meal = { name: "", foods: [food] };

class Store {
  @observable meals: Meal[] = [meal];
  @observable name: string = "";
  @observable isLoading: boolean = false;
  @observable error: string = "";
  @observable suggest: any[] = [];

  @action
  addMeal = () => {
    this.meals.push({
      name: "",
      foods: [food],
    });
  };

  @computed
  get mealCount(): number {
    return this.meals.length;
  }

  @action
  updateMeal = a => {
    console.log(a);
  };

  @action
  updateName = value => {
    this.name = value;
  };

  @action
  addFood = index => this.meals[index].foods.push(food);

  @action
  updateFood = (mealId, foodId) => event => {
    this.meals[mealId].foods[foodId][event.target.name] = event.target.value;
  };

  @action
  setLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };

  @action
  setError = (error: string) => {
    this.error = error;
  };

  @action
  removeFood(mealId: number, foodId: number) {
    this.meals[mealId].foods.splice(foodId, 1);
  }

  @action
  clearSuggest = () => {
    this.suggest = [];
  };

  @action
  setFood(mealId: number, foodId: number, result: any) {
    // TODO: Add sugars and fibers
    this.meals[mealId].foods[foodId] = {
      ...this.meals[mealId].foods[foodId],
      name: result.name.fi,
      carbs: Math.round(result.carbohydrate),
      fats: Math.round(result.fat),
      protein: Math.round(result.protein),
      alcohol: Math.round(result.alcohol),
    };
  }
}

export default new Store();
