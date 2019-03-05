import React from "react";
import GroceryList from "./component/GroceryList";
import { headerStyle } from "./style";

const Header = () => {
  return <div style={{ ...headerStyle.containerStyle }}>GroceryList</div>;
};

export default () => {
  return (
    <>
      <Header />
      <GroceryList />
    </>
  );
};
