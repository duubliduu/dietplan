import * as React from "react";
import { Meal } from "./Types";
import { observer } from "mobx-react";
import store from "./Store";

const Meal: React.SFC<Meal> = observer(({ name, foods }) => (
  <div>
    <input value={name} onChange={e => store.updateMeal(e)} />
  </div>
));

export default Meal;
