import * as React from "react";
import { Meal } from "./Types";
import { observer } from "mobx-react";
import store from "./Store";
import Food from "./Food";
import styled from "styled-components";
import { Input } from "./Root";

const Foods = styled.div`
  margin: 10px 0;
`;

const Header = styled.div`
  display: flex;
  flex: 1;
`;

const Item = styled.div`
  padding: 10px 12px;
  background: #eceded;
  width: 100%;
  font-size: 1rem;
`;

const Label = styled(Item)`
  font-size: 0.8rem;
  font-weight: bold;
`;

export const AddButton = styled.button`
  width: 100%;
  padding: 10px;
`;

const sum = foods =>
  foods.reduce(
    (collection, food) => {
      const amount = parseInt(food.amount);
      const percent = amount / 100;
      const carbs = parseFloat(food.carbs) * percent;
      const fats = parseFloat(food.fats) * percent;
      const protein = parseFloat(food.protein) * percent;
      return [
        collection[0] + carbs * 4 + fats * 9 + protein * 4,
        collection[1] + amount,
        collection[2] + carbs,
        collection[3] + fats,
        collection[4] + protein,
      ];
    },
    [0, 0, 0, 0, 0]
  );

const Meal: React.SFC<Meal> = observer(({ mealId, name, foods }) => (
  <Foods>
    <Input placeholder="Meal name" />
    <Header>
      <Label>KCAL</Label>
      <Label>grams</Label>
      <Label>carbs</Label>
      <Label>fats</Label>
      <Label>protein</Label>
    </Header>
    <Header>
      {sum(foods).map((food, index) => (
        <Item key={index}>{food}</Item>
      ))}
    </Header>
    {foods.map((food, foodId) => (
      <Food key={foodId} mealId={mealId} foodId={foodId} {...food} />
    ))}
    <AddButton onClick={() => store.addFood(mealId)}>Add food</AddButton>
  </Foods>
));

export default Meal;
