import React, { Component } from "react";
import style from "./VariantPage.module.scss";
import cn from "classnames";
import SideBarLayout from "Pages/mainPage/components/sideBarLayout";

// import PropTypes from 'prop-types';

class VariantPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sidebarToggle: true
    };
  }
  
  handleClick = () => {
    this.setState({
      sidebarToggle: !this.state.sidebarToggle
    });
  };
  
  render() {
    const { sidebarToggle } = this.state;
    return (
      <div className={style["variant-page-wrapper"]}>
        <div
          className={cn([
            "links-wrapper",
            { "links-wrapper-open": sidebarToggle }
          ])}
        >
          
          <SideBarLayout handleClick={this.handleClick} mode={sidebarToggle}>
            <div className="links">
              <h2>Links</h2>
              <ul>
                <li>
                  <a href="#">UCSD</a>
                </li>
                <li>
                  <a href="#">gnomId</a>
                </li>
                <li>
                  <a href="#">OMIM</a>
                </li>
              </ul>
            </div>
          </SideBarLayout>
        </div>

        <div
          className={cn([
            "main-wrapper",
            { "links-wrapper-open": sidebarToggle }
          ])}
        >
          <div className="main-header-data">GENEXYZ</div>
          <div className="main-data">
            <div className="history">History</div>
            <div className="evidence">Evidence</div>
          </div>
        </div>
      </div>
    );
  }
}

VariantPage.propTypes = {};

export default VariantPage;
