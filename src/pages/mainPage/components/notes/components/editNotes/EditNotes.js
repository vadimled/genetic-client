import React from "react";
import style from "./EditNotes.module.scss";
import ActionsFooter from "GenericComponents/actionsFooter";
import { Input } from "antd";
import PropTypes from "prop-types";

const { TextArea } = Input;

const EditNotes = ({ notesValue, handleOnChange, doneHandler, cancelHandler  }) => {

  return (
    <div className={style["edit-notes-wrapper"]}>
      <TextArea autosize onChange={handleOnChange} value={notesValue} />
      <div className="divider" />
      <ActionsFooter doneHandler={doneHandler} cancelHandler={cancelHandler}/>
    </div>
  );
};

EditNotes.propTypes = {
  notesValue: PropTypes.string,
  handleOnChange: PropTypes.func
};

export default EditNotes;
