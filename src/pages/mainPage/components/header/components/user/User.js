import React, { Component } from "react";
import style from "./User.module.scss";
import PropTypes from "prop-types";

class User extends Component {
  handelAvatarClick = e => {
    console.log(e.target);
  };

  getInitiales = () => {
    return this.props.userName
      .toUpperCase()
      .split(" ")
      .map(item => item[0])
      .join("");
  };

  render() {
    const { userName, avatarUrl } = this.props;
    return (
      <div className={style["user-wrapper"]} onClick={this.handelAvatarClick}>
        {avatarUrl ? (
          <picture className="avatar">
            <img src={avatarUrl} alt="User's avatar" />
          </picture>
        ) : (
          userName && (
            <div className="avatar-fallback">{this.getInitiales()}</div>
          )
        )}
      </div>
    );
  }
}

User.propTypes = {
  userName: PropTypes.string,
  avatarUrl: PropTypes.string
};

export default User;
