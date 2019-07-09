import React, { Component, Fragment, createRef } from "react";
import { Tooltip } from "antd";
import style from "./Notes.module.scss";
import { LIMITS, TEXTS } from "Utils/constants";
import { ReactComponent as EditIcon } from "Assets/edit.svg";
import PropTypes from "prop-types";
import EditNotes from "./components/editNotes";

class Notes extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      isEdit: false,
      editNotes: props.value,
      limit: {
        value: 0
      }
    };

    this.state = {
      ...this.initialState
    };

    this.notes = createRef();

    document.addEventListener("mousedown", this.cleanupOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.cleanupOutside, false);
  }

  validateNotesLength = number => {
    if (number <= LIMITS.maxNotesChar) {
      return {
        validateStatus: "success",
        errorMsg: null
      };
    }
    return {
      validateStatus: "error",
      errorMsg: `Maximum ${LIMITS.maxNotesChar} characters`
    };
  };

  cleanupOutside = e => {
    if (!this.notes.current.contains(e.target)) {
      this.cleanupState();
    }
  };

  handleDone = () => {
    // <<<<<<< HEAD:src/genericComponents/notes/Notes.js
    const { setNotes, updateActivityLog, value: prevValue, tableRow } = this.props;
    setNotes(this.state.editNotes);
    updateActivityLog({
      prevValue,
      item: tableRow,
      changedField: "notes"
    });

    this.cleanupState();
  };

  cleanupState = () => {
    this.setState({ ...this.initialState });
  };

  handelEditClick = () => {
    const { value } = this.props;
    this.setState({ editNotes: value, isEdit: true });
  };

  handleEditNotesOnChange = e => {
    const { value } = e.target;
    let amount = value.length;
    this.setState({
      editNotes: value,
      limit: {
        ...this.validateNotesLength(amount),
        value: amount
      }
    });
  };

  setPopup = () => {
    return (
      <div className="edit-text-box">
        <EditNotes
          doneHandler={this.handleDone}
          cancelHandler={this.cleanupState}
          handleOnChange={this.handleEditNotesOnChange}
          notesValue={this.state.editNotes}
          validateStatus={this.state.limit}
        />
      </div>
    );
  };

  render() {
    const { value, placeholder } = this.props;

    return (
      <div ref={this.notes} className={style["notes-wrapper"]}>
        {!value ? (
          <div className="notes-content-empty" onClick={this.handelEditClick}>
            {placeholder || TEXTS.addNote}
          </div>
        ) : (
          <Fragment>
            <Tooltip placement="topLeft" title={value}>
              <div className="notes-content">{value}</div>
            </Tooltip>

            <div
              data-testid="edit-icon"
              className="notes-icon"
              onClick={this.handelEditClick}>
              <EditIcon />
            </div>
          </Fragment>
        )}
        {this.state.isEdit && this.setPopup()}
      </div>
    );
  }
}

Notes.propTypes = {
  setNotes: PropTypes.func.isRequired,
  updateActivityLog: PropTypes.func,
  value: PropTypes.string,
  tableRow: PropTypes.object,
  placeholder: PropTypes.string
};

Notes.defaultProps = {
  value: "",
  tableRow: {},
  updateActivityLog: () => false
};

export default React.memo(Notes);
