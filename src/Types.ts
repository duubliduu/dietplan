export type Food = {
  name: string;
  amount: number;
  carbs: number;
  fats: number;
  protein: number;
  alcohol: number;
};

export type Meal = {
  name: string;
  foods: Food[];
};
