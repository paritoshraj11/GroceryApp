import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import renderer from "react-test-renderer";
import GroceryListRow from "./grocery/component/GroceryListRow";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("list row test case", () => {
  const component = renderer.create(
    <GroceryListRow
      data={{
        _id: 1,
        name: "a",
        votes: 0
      }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
