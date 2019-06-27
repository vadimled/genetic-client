import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AutoComplete, Icon, Input } from "antd";

import cn from "classnames";
import style from "./TumorToolbar.module.scss";
import { ReactComponent as CloseIcon } from "Assets/close-circle.svg";
import { getTumorInfoMode } from "Store/selectors";
import { setTumorInfoMode } from "Actions/variantsActions";

const { Option } = AutoComplete;

class TumorToolbar extends Component {
  state = {
    dataSource: [],
  };
  
  handleSearch = value => {
    this.setState({
      dataSource: value ? this.searchResult(value) : [],
    });
  };
  
  onSelect(value) {
    console.log('onSelect', value);
  }
  
  getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }
  
  searchResult(query) {
    return new Array(this.getRandomInt(5))
      .join('.')
      .split('.')
      .map((item, idx) => ({
        query,
        category: `${query}${idx}`,
        count: this.getRandomInt(200, 100),
      }));
  }
  
  renderOption(item) {
    return (
      <Option key={item.category} text={item.category}>
        <div className="global-search-item">
          <span className="global-search-item-desc">
          
            {item.category}
          
          </span>
          <span className="global-search-item-count">{item.count} results</span>
        </div>
      </Option>
    );
  }
  
  handelClose = () => {
    this.props.setTumorInfoMode(false);
  };
  
  render() {
    const { dataSource } = this.state;
    return (
      <div className={style["tumor-toolbar-wrapper"]}>
        <div className="tumor-info-wrapper">
          <div className="global-search-wrapper" style={{ width: 300 }}>
            <AutoComplete
              className="global-search"
              size="large"
              style={{ width: '100%' }}
              dataSource={dataSource.map(this.renderOption)}
              onSelect={this.onSelect}
              onSearch={this.handleSearch}
              placeholder="input here"
              optionLabelProp="text"
            >
              <Input suffix={<Icon type="close" className="certain-category-icon" />} />
            </AutoComplete>
          </div>
        </div>
        <div
          className={cn([
            "right-wrapper",
            { "sidebar-open": this.props.sidebarToggle }
          ])}
        >
          <div className="icon" onClick={this.handelClose}>
            <CloseIcon />
          </div>
        </div>
      </div>
    );
  }
}

TumorToolbar.propTypes = {
  sidebarToggle: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    isTumorInfo: getTumorInfoMode(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setTumorInfoMode: data => dispatch(setTumorInfoMode(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TumorToolbar);
