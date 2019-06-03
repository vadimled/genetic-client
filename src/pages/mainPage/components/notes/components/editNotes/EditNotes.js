import React from "react";
import style from "./EditNotes.module.scss";
import ActionsFooter from "GenericComponents/actionsFooter";
import { Form, Input } from "antd";
import PropTypes from "prop-types";
import { LIMITS } from "Utils/constants";

const { TextArea } = Input;

const EditNotes = ({
  notesValue,
  handleOnChange,
  doneHandler,
  cancelHandler,
  validateStatus
}) => {
  return (
    <div className={style["edit-notes-wrapper"]}>
      <Form>
        <Form.Item
          validateStatus={validateStatus.validateStatus}
          help={validateStatus.errorMsg}
        >
          <TextArea autosize value={notesValue} onChange={handleOnChange} />
          <div className="divider">
            <div className="counter">{`${validateStatus.value}/${
              LIMITS.maxNotesChar
            }`}</div>
          </div>
        </Form.Item>
      </Form>

      <ActionsFooter doneHandler={doneHandler} cancelHandler={cancelHandler} />
    </div>
  );
};

EditNotes.propTypes = {
  notesValue: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
  doneHandler: PropTypes.func.isRequired,
  cancelHandler: PropTypes.func.isRequired,
  validateStatus: PropTypes.object
};

export default EditNotes;
