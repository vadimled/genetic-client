import React from "react";
import style from "./TableActions.module.scss";
import { ReactComponent as EditIcon } from "Assets/edit.svg";
import { ReactComponent as DeliteIcon } from "Assets/delete.svg";
import PropTypes from "prop-types";

function TableActions({ onEdit, onDelete }) {
  return (
    <div className={style["table-actions-wrapper"]}>
      <div className="table-actions">
        <div className="edit">
          <EditIcon onClick={onEdit} />
        </div>
        <div className="delete">
          <DeliteIcon onClick={onDelete} />
        </div>
      </div>
    </div>
  );
}

TableActions.propTypes = {
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default TableActions;
