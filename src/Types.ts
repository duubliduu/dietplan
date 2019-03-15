export type Food = {
  name: string;
  amount: number;
};

export type Meal = {
  name: string;
  foods: Food[];
};
