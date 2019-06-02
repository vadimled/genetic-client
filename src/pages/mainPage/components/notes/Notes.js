import React, { Component, Fragment } from "react";
import style from "./Notes.modules.scss";
import { TEXTS } from "src/utils/constants";
import { ReactComponent as EditIcon } from "Assets/edit.svg";
import { Popover } from "antd";
// import PropTypes from 'prop-types';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    };
  }

  handelEditClick = () => {
    this.setState({ isEdit: true });
  };

  render() {
    const { valueNotes } = this.props;
    return (
      <div className={style["notes-wrapper"]}>
        {!valueNotes ? (
          <div className="notes-content-empty" onClick={this.handelEditClick}>
            {TEXTS.addNote}
            {this.state.isEdit && (
              <Popover placement="bottom" content={content} trigger="click">
                <div className="edit-text-box" />
              </Popover>
            )}
          </div>
        ) : (
          <Fragment>
            <div className="notes-content">{valueNotes}</div>
            <div className="icon-edit" onClick={this.handelEditClick}>
              <EditIcon />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

Notes.propTypes = {};

export default Notes;
