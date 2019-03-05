import React from "react";
import { listRowStyle } from "../style";
import { dislikeIcon, likeIcon } from "../images";
import { isEqualObject } from "../clientUtility";

class ListRow extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqualObject(this.props, nextProps);
  }
  render() {
    let { data, likeAction, dislikeAction } = this.props;
    let { nameTextStyle, containerStyle, iconStyle, votesTextStyle } = listRowStyle || {};
    return (
      <li style={{ ...containerStyle }}>
        <span style={{ ...nameTextStyle }}>{data.name}</span>
        <span style={{ ...votesTextStyle }}>{data.votes}</span>
        <img style={{ ...iconStyle }} src={likeIcon} onClick={() => likeAction(data)} />
        <img style={{ ...iconStyle }} src={dislikeIcon} onClick={() => dislikeAction(data)} />
      </li>
    );
  }
}

export default ListRow;
