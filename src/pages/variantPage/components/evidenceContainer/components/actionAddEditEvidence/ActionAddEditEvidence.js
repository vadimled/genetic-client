import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Button, Input, Select } from "antd";
// import { ReactComponent as EditIcon } from "assets/edit.svg";
// import cn from "classnames";
import SimpleSelect from "GenericComponents/simpleSelect/SimpleSelect";
import style from "./ActionAddEditEvidence.module.scss";
import { getTabPaneHeaders } from "Store/selectors";
import { setEvidenceActionSlidePanelStatus } from "Actions/evidenceConfigActions";
import { connect } from "react-redux";
import { EVIDENCE_CATEGORIES_OPTIONS, EVIDENCE_LEVEL_OPTIONS } from "Utils/constants";
import TableLevel from "variantComponents/evidenceContainer/components/tableLevel";

// eslint-disable-next-line
const Option = Select.Option;
// eslint-disable-next-line
const { TextArea } = Input;

class ActionAddEditEvidence extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };
  
  handleSelectChange = e => {
    console.log(e.target.value);
  };
  
  render() {
    return (
      <div className={style["evidence-form-wrapper"]}>
        <form className="evidence-form" onSubmit={this.handleSubmit}>
          <div className="form-item">
            <SimpleSelect
              // onFocus={handelFocus}
              label={"Evidence type"}
              testId={`evidence-type-select`}
              name={`evidence-type-select`}
              value={"publications"}
              options={EVIDENCE_CATEGORIES_OPTIONS}
              onChange={this.handleSelectChange}
              // selectHeaderClass={}
              // className={"evidence-type-title"}
            />
          </div>
          <div className="form-item">
            <label htmlFor={"form-item-source"}>Source</label>
            <Input
              id={"form-item-source"}
              onChange={val =>
                this.handleSelectChange({
                  target: {
                    name: "name",
                    value: val
                  }
                })
              }
              className={"form-item-source"}
              placeholder="Paste source"
            />
          </div>
          <div className="form-item">
            <label htmlFor={"evidence-level-select"}>Source</label>
            <Select
              id={"evidence-level-select"}
              onChange={val =>
                this.handleSelectChange({
                  target: {
                    name: "name",
                    value: val
                  }
                })
              }
              value={"b"}
              name={"evidence-level-select"}
              data-testid={"evidence-level-select"}
            >
              {EVIDENCE_LEVEL_OPTIONS.map(option => {
                return (
                  <Option key={option.value} value={option.value}>
                    <TableLevel level={option.label}/>
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className="form-item">
            <label htmlFor={"evidence-description-textarea"}>Description</label>
            <TextArea
              autosize
              value={""}
              name={"evidence-description-textarea"}
              onChange={val =>
                this.handleSelectChange({
                  target: {
                    name: "name",
                    value: val
                  }
                })
              }
              data-testid={"evidence-description-textarea"}
            />
          </div>
          <div className="divider"/>
          <Button type="primary">Add evidence</Button>
        </form>
      </div>
    );
  }
}

ActionAddEditEvidence.propTypes = {};

const mapStateToProps = state => {
  return {
    tabPaneHeaders: getTabPaneHeaders(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    openSlidePanel: status =>
      dispatch(setEvidenceActionSlidePanelStatus(status))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionAddEditEvidence);
