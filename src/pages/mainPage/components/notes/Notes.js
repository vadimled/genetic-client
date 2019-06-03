import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Popover, Tooltip } from "antd";
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
      visible: false,
      editNotes: props.valueNotes,
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
    const { id, setNotes } = this.props;
    setNotes({
      id,
      notes: this.state.editNotes
    });
    this.setState({ ...this.initialState });
  };

  handleCancel = () => {
    this.setState({ ...this.initialState });
  };

  handelEditClick = () => {
    this.setState({ visible: true });
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
    // const { valueNotes } = this.props;
    return (
      <div className="edit-text-box">
        <EditNotes
          doneHandler={this.handleDone}
          cancelHandler={this.handleCancel}
          handleOnChange={this.handleEditNotesOnChange}
          notesValue={this.state.editNotes}
          validateStatus={this.state.limit}
        />
      </div>
    );
  };

  render() {
    const { valueNotes } = this.props;
    return (
      <div className={style["notes-wrapper"]}>
        {!valueNotes ? (
          <Popover
            placement="bottom"
            content={this.setPopup()}
            trigger="click"
            visible={this.state.visible}
          >
            <div className="notes-content-empty" onClick={this.handelEditClick}>
              {TEXTS.addNote}
            </div>
          </Popover>
        ) : (
          <Fragment>
            <Tooltip placement="bottom" title={valueNotes}>
              <div className="notes-content">{valueNotes}</div>
            </Tooltip>
            <Popover
              placement="bottom"
              content={this.setPopup()}
              trigger="click"
              visible={this.state.visible}
            >
              <div className="notes-icon" onClick={this.handelEditClick}>
                <EditIcon />
              </div>
            </Popover>
          </Fragment>
        )}
      </div>
    );
  }
}

Notes.propTypes = {
  id: PropTypes.number.isRequired,
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
