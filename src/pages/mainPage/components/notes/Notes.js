import React, { Component, Fragment, createRef } from "react";
import { connect } from "react-redux";
import { Tooltip } from "antd";
import style from "./Notes.module.scss";
import { LIMITS, TEXTS } from "Utils/constants";
import { ReactComponent as EditIcon } from "Assets/edit.svg";
import PropTypes from "prop-types";
import EditNotes from "Pages/mainPage/components/notes/components/editNotes";
import { setNotes } from "Store/actions/tableActions";
import { getNotes } from "Store/selectors";

class Notes extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      isEdit: false,
      editNotes: props.getValue,
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
    const { id, setNotes } = this.props;
    setNotes({
      id,
      notes: this.state.editNotes
    });
    this.cleanupState();
  };

  cleanupState = () => {
    this.setState({ ...this.initialState });
  };

  handelEditClick = () => {
    const { getValue } = this.props;
    this.setState({ editNotes: getValue, isEdit: true });
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
    const { getValue } = this.props;

    return (
      <div ref={this.notes} className={style["notes-wrapper"]}>
        {!getValue ? (
          <div className="notes-content-empty" onClick={this.handelEditClick}>
            {TEXTS.addNote}
          </div>
        ) : (
          <Fragment>
            <Tooltip placement="topLeft" title={getValue}>
              <div className="notes-content">{getValue}</div>
            </Tooltip>

            <div className="notes-icon" onClick={this.handelEditClick}>
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
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  valueNotes: PropTypes.string
};

const mapDispatchToProps = dispatch => {
  return {
    setNotes: data => dispatch(setNotes(data))
  };
};

const mapStateToProps = (state, owenProps) => {
  return {
    getValue: getNotes(state, owenProps?.id)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);
