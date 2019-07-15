import React, { Component } from "react";
import style from "./VariantPage.module.scss";
import cn from "classnames";
import SideBarLayout from "Pages/mainPage/components/sideBarLayout";
import VariantPageHeader from "variantComponents/variantPageHeader";
import ExternalResources from "variantComponents/externalResources";
import { ReactComponent as ClosedIcon } from "Assets/closeSideBar.svg";
import { ReactComponent as OpenedIcon } from "Assets/openSideBar.svg";
import { getExternalResources } from "Store/selectors";
import { connect } from "react-redux";

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
    const { externalResources } = this.props;
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
            <ExternalResources externalResources={externalResources} />
          </SideBarLayout>
        </div>

        <div
          className={cn([
            "main-wrapper",
            { "links-wrapper-open": sidebarToggle }
          ])}
        >
          <div className="main-header-data">
            <VariantPageHeader sidebarToggle={sidebarToggle} />
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

const mapStateToProps = state => {
  return {
    externalResources: getExternalResources(state)
  };
};

// function mapDispatchToProps(dispatch) {
//   return {
//     setAlert: data => dispatch(setAlert(data))
//   };
// }

export default connect(mapStateToProps)(VariantPage);
