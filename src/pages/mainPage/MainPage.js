import React, { Component } from "react";
import style from "./MainPage.module.scss";
import cn from "classnames";
import SideBarLayout from "./components/sideBarLayout";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarToggle: false
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
      <div className={style["main-page"]}>
        <div
          className={cn(["sidebar-wrapper", { "sidebar-open": sidebarToggle }])}
        >
          <SideBarLayout
            title={"Filters"}
            handleClick={this.handleClick}
            mode={sidebarToggle}
          >
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.  +
              Nullam sed est lectus. In hac habitasse platea dictumst.  +
              Aenean accumsan venenatis dapibus. Aenean faucibus dolor et leo
              tempor auctor.  + Pellentesque et sagittis lorem. Aliquam ut
              lacus blandit, egestas eros ac, dictum ante.  + Integer lobortis
              nisl dolor, eget porta sem accumsan vel.  + Maecenas lacinia
              nibh posuere neque fermentum bibendum. +  Aenean interdum ante
              et imperdiet gravida. Sed vitae libero facilisis, malesuada elit
              ac, sodales lorem.  + In hac habitasse platea dictumst. Etiam
              vitae convallis velit, id finibus arcu. +  Sed in ante dictum
              lacus viverra consequat. \n + \n + Subheading\n + \n +
              Witae neque. Ut odio dolor, pellentesque vitae odio nec,
              ultricies tempus nibh.  + Mauris vitae orci sit amet lacus
              molestie vulputate ac id erat.  + Proin ultricies risus eu
              tincidunt ultricies. +  Interdum et malesuada fames ac ante
              ipsum primis in faucibus.molestie vulputate ac id erat.  + Proin
              ultricies risus eu tincidunt ultricies.  + Interdum et malesuada
              fames ac ante ipsum primis in faucibus. ies tempus nibh. +
              Mauris vitae orci sit amet lacus molestie vulputate ac id erat.
              + Proin ultricies risus eu tincidunt ultricies. Interdum et
              malesuada fame`}
          </SideBarLayout>
        </div>
        <div
          className={cn([
            "main-content-wrapper",
            { "sidebar-open": sidebarToggle }
          ])}
        >
          <h1>Page content</h1>
        </div>
      </div>
    );
  }
}

export default MainPage;
