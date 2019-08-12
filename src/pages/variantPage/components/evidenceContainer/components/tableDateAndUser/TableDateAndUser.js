import React from "react";
import PropTypes from "prop-types";
import style from "./TableDateAndUser.module.scss";

function TableDateAndUser({date, user}) {
  return (
    <div className={style["table-date-and-user-wrapper"]}>
      <div className="table-date-and-user">
        <div className="date">{date}</div>
        <div className="user">{user.name}</div>
      </div>
    </div>
  );
}

TableDateAndUser.propTypes = {
  date: PropTypes.string,
  user: PropTypes.object
};

export default TableDateAndUser;
