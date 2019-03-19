import * as React from "react";
import { Food } from "./Types";
import store from "./Store";
import { Input } from "./Root";
import styled from "styled-components";
import Suggest from "./Suggest";

const Row = styled.div`
  display: flex;
  fex: 1;
  flex-direction: row;
  max-width: 100%;
  position: relative;
`;

interface Props extends Food {
  foodId: number;
  mealId: number;
}

const Food: React.FC<Props> = ({ foodId, mealId, name, amount, alcohol, carbs, protein, fats }) => {
  const [focus, setFocus] = React.useState(false);
  return (
    <Row>
      <Input
        name="name"
        value={name}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={store.updateFood(mealId, foodId)}
        autocomplete={false}
      />
      <Suggest
        query={name}
        visible={focus}
        onSelect={result => store.setFood(mealId, foodId, result)}
      />
      <Input
        name="amount"
        value={amount}
        onChange={store.updateFood(mealId, foodId)}
        type="number"
        autocomplete={false}
      />
      <Input
        name="alcohol"
        value={alcohol}
        onChange={store.updateFood(mealId, foodId)}
        type="number"
        autocomplete={false}
      />
      <Input
        name="carbs"
        value={carbs}
        onChange={store.updateFood(mealId, foodId)}
        type="number"
        autocomplete={false}
      />
      <Input
        name="fats"
        value={fats}
        onChange={store.updateFood(mealId, foodId)}
        type="number"
        autocomplete={false}
      />
      <Input
        name="protein"
        value={protein}
        onChange={store.updateFood(mealId, foodId)}
        type="number"
        autocomplete={false}
      />
      <button onClick={() => store.removeFood(mealId, foodId)}>X</button>
    </Row>
  );
};

export default Food;
