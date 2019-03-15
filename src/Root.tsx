import * as React from "react";
import Meal from "./Meal";
import { observer } from "mobx-react";
import store from "./Store";

type Props = {};

const Root: React.SFC<Props> = observer(() => {
  console.log(store.meals);
  return (
    <div>
      Meals
      <input onChange={e => store.updateName(e.target.value)} value={store.name} />
      <div>
        {store.meals.map((meal, index) => (
          <Meal key={index} {...meal} />
        ))}
        <button onClick={() => store.addMeal()}>Add</button>
      </div>
    </div>
  );
});

export default Root;
