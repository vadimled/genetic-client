import React, { Component } from "react";
import style from "./User.module.scss";
import PropTypes from "prop-types";

class User extends Component {
  render() {
    const { userName, avatarUrl } = this.props;
    return (
      <div className={style["user-wrapper"]}>
        {avatarUrl ? (
          <picture className="avatar">
            <img
              className="lazy"
              src={avatarUrl}
              data-src={avatarUrl}
              alt="User's avatar"
            />
          </picture>
        ) : (
          userName && (
            <div className="avatar-fallback">
              {[...userName]
                .splice(0, 2)
                .join("")
                .toUpperCase()}
            </div>
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
