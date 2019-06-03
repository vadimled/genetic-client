import React, { Component, Fragment } from "react";
import style from "./Notes.module.scss";
import { LIMITS, TEXTS } from "Utils/constants";
import { ReactComponent as EditIcon } from "Assets/edit.svg";
import PropTypes from "prop-types";
import EditNotes from "Pages/mainPage/components/notes/components/editNotes";

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      editNotes: "",
      limit: {
        value: 0,
      },
    };
  }
  
  validateNotesLength = number => {
    if (number <= LIMITS.maxNotesChar) {
      return {
        validateStatus: 'success',
        errorMsg: null,
      };
    }
    return {
      validateStatus: 'error',
      errorMsg: `Maximum ${LIMITS.maxNotesChar} characters`,
    };
  };
  
  handleDone = () => {
    this.setState({ isEdit: false, editNotes: "" });
  };

  handleCancel = () => {
    this.setState({ isEdit: false, editNotes: "" });
  };

  handelEditClick = e => {
    e.stopPropagation();
    this.setState({ isEdit: true });
  };

  handleEditNotesOnChange = e => {
    const { value } = e.target;
    let amount = value.length;
    this.setState({
      editNotes: value ,
      limit: {
        ...this.validateNotesLength(amount),
        value:amount,
      }
    });
  };
  
  
  render() {
    const { valueNotes } = this.props;
    return (
      <div className={style["notes-wrapper"]}>
        {!valueNotes ? (
          <div className="notes-content-empty" onClick={this.handelEditClick}>
            {TEXTS.addNote}
          </div>
        ) : (
          <Fragment>
            <div className="notes-content">{valueNotes}</div>
            <div onClick={this.handelEditClick}>
              <EditIcon />
            </div>
          </Fragment>
        )}
        {this.state.isEdit && (
          <div className="edit-text-box">
            <EditNotes
              doneHandler={this.handleDone}
              cancelHandler={this.handleCancel}
              handleOnChange={this.handleEditNotesOnChange}
              notesValue={this.state.editNotes}
              validateStatus={this.state.limit}
            />
          </div>
        )}
      </div>
    );
  }
}

Notes.propTypes = {
  valueNotes: PropTypes.string
};

export default Notes;
