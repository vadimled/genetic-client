import React, { Component, Fragment } from "react";
import {connect} from "react-redux";
import { Tooltip } from "antd";
import style from "./Notes.module.scss";
import { LIMITS, TEXTS } from "Utils/constants";
import { ReactComponent as EditIcon } from "Assets/edit.svg";
import PropTypes from "prop-types";
import EditNotes from "Pages/mainPage/components/notes/components/editNotes";
import { setNotes } from "Store/actions/tableActions";

class Notes extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      isEdit: false,
      editNotes: "",
      limit: {
        value: 0
      }
    };

    this.state = {
      ...this.initialState
    };
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

  handleDone = () => {
    this.props.setNotes(this.state.editNotes);
    this.setState({ ...this.initialState });
  };

  handleCancel = () => {
    this.setState({ ...this.initialState });
  };

  handelEditClick = e => {
    e.stopPropagation();
    this.setState({ isEdit: true });
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
            <Tooltip placement="bottom" title={valueNotes}>
              <div className="notes-content">{valueNotes}</div>
            </Tooltip>
            <div className="notes-icon" onClick={this.handelEditClick}>
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

function mapDispatchToProps(dispatch) {
  return {
    setNotes: (data) => dispatch(setNotes(data)),
  };
}

export default connect(null, mapDispatchToProps)(Notes);
