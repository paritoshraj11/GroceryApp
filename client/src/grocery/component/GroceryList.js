import React from "react";
import { nativeFetch, findIndex } from "../clientUtility";
import List from "../basicComponent/List";
import ListRow from "./GroceryListRow";
import { listStyle } from "../style";

export default class GroceryList extends React.Component {
  state = {};
  componentDidMount() {
    nativeFetch({
      method: "get",
      url: "/products"
    })
      .then(({ data }) => {
        this.setState({ data });
      })
      .catch(err => {
        //do nothing
      });
  }

  mergeState = row => {
    if (!row || !row._id) {
      return;
    }
    let { data } = this.state;
    let indexOfItem = findIndex(data, row);
    if (indexOfItem != undefined) {
      data.splice(indexOfItem, 1, row);
      this.setState({ data });
    }
  };

  updateRow = async ({ data, url }) => {
    try {
      let { data: row } = await nativeFetch({
        method: "post",
        url,
        data
      });
      if (row) {
        this.mergeState(row);
      }
    } catch (err) {
      //do nothing
    }
  };

  onLike = data => {
    this.updateRow({ data, url: "/upvote" });
  };
  onDisLike = data => {
    this.updateRow({ data, url: "/downvote" });
  };
  render() {
    let {
      state: { data = [] },
      onLike,
      onDisLike
    } = this;
    return (
      <List
        style={listStyle.containerStyle}
        data={data}
        renderItem={data => {
          return <ListRow data={data} likeAction={onLike} dislikeAction={onDisLike} />;
        }}
      />
    );
  }
}
