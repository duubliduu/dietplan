import React from "react";
import { shallow } from "enzyme";
import Food from "./Food";

const props = {
  foodId: 1,
  mealId: 1,
  name: "name",
  amount: 100,
  alcohol: 1,
  carbs: 1,
  protein: 1,
  fats: 1,
};

describe("Food", () => {
  it("should render", () => {
    const subject = shallow(<Food {...props} />);
    expect(subject).toMatchSnapshot();
  });
});
