import * as React from "react";
import Meal, { AddButton } from "./Meal";
import { observer } from "mobx-react";
import store from "./Store";
import styled from "styled-components";

const Meals = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  display: flex;
  flex: 1;
  font-size: 1rem;
  max-width: 100%;
  width: 100%;
  padding: 10px;
`;

type Props = {};

const Root: React.SFC<Props> = observer(() => (
  <div style={{ fontFamily: "sans-serif" }}>
    <div>
      loading: {store.isLoading && <span>yes</span>} {!store.isLoading && <span>no</span>}
    </div>
    <div>error: {store.error}</div>
    <Input
      placeholder="Diet name"
      onChange={e => store.updateName(e.target.value)}
      value={store.name}
    />
    <Meals>
      {store.meals.map((meal, index) => (
        <Meal key={index} mealId={index} {...meal} />
      ))}
    </Meals>
    <AddButton onClick={() => store.addMeal()}>Add meal</AddButton>
    <p>Alkuperäislähde: Terveyden ja hyvinvoinnin laitos, Fineli</p>
  </div>
));

export default Root;
