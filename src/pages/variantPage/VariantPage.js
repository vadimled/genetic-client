import React, { Component } from "react";
import style from "./VariantPage.module.scss";
import cn from "classnames";
import SideBarLayout from "Pages/mainPage/components/sideBarLayout";
import VariantPageHeader from "variantComponents/variantPageHeader";
import ExternalResources from "variantComponents/externalResources";
import { ReactComponent as OpenedIcon } from "Assets/openSideBar.svg";
import { ReactComponent as ClosedIcon } from "Assets/closeSideBar.svg";

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
          <SideBarLayout
            handleClick={this.handleClick}
            mode={sidebarToggle}
            className={"external-resources"}
            iconOpened={<OpenedIcon />}
            iconClosed={<ClosedIcon />}
          >
            <ExternalResources />
          </SideBarLayout>
        </div>

        <div
          className={cn([
            "main-wrapper",
            { "links-wrapper-open": sidebarToggle }
          ])}
        >
          <div className="main-header-data">
            <VariantPageHeader
              id={"k5wp5amernh84pvsygjji9ljz"}
              sidebarToggle={sidebarToggle}
            />
          </div>
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
