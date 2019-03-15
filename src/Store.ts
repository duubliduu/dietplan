import { action, observable } from "mobx";
import { Meal } from "./Types";

class Store {
  @observable meals: Meal[] = [{ name: "esimerkkis", foods: [] }];
  @observable name: string = "";

  @action
  addMeal = () => {
    this.meals = [
      {
        name: "sadf",
        foods: [],
      },
      {
        name: "sdf",
        foods: [],
      },
    ];
    // console.log(this.meals);
  };

  @action
  updateMeal = a => {
    console.log(a);
  };

  @action
  updateName = value => (this.name = value);
}

export default new Store();
