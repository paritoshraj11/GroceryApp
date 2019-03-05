import React from "react";

export default class List extends React.Component {
  render() {
    let { data, renderItem, style } = this.props;
    return <ul style={{ ...style }}>{data.map(data => renderItem(data))}</ul>;
  }
}
