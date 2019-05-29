import React, { Component } from "react";
import style from "./MainPage.module.scss";
import cn from "classnames";
import SideBarLayout from "./components/sideBarLayout";
import SelectionGroup from "../../genericComponents/selectionGroup";
import { Collapse } from "antd";
import filtersConfig from "./filtersConfig";
import Toolbar from "./components/toolbar";
import TableLayout from "./components/tableLayout";

// eslint-disable-next-line
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const Arrow = ({ dir }) => <i className={`${dir} arrow`} />;

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarToggle: true,
      filters: {
        ["Type"]: {},
        ["Variant Class"]: {
          items: [{ unclassified: true }, { path: false }]
        },
        ["Hot Spot"]: {},
        ["SNP"]: {},
        ["ROI"]: {},
        ["Gnom ID"]: {}
      }
    };
  }

  handleClick = () => {
    this.setState({
      sidebarToggle: !this.state.sidebarToggle
    });
  };

  onChange = e => {
    console.log(e.target);
  };

  render() {
    const { sidebarToggle, filters } = this.state;

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
            <Collapse
              defaultActiveKey={["1"]}
              onChange={callback}
              expandIcon={({ isActive }) => (
                <Arrow dir={!isActive ? "right" : "down"} />
              )}
            >
              {Object.keys(filtersConfig).map((key, i) => {
                return (
                  <Panel header={key} key={i + 1}>
                    <SelectionGroup
                      mode={filtersConfig[key].mode}
                      filterItems={filtersConfig[key].items}
                      onChange={this.onChange}
                      values={
                        filters[key].items && filters[key].items.length > 0
                          ? filters[key].items
                          : []
                      }
                    />
                  </Panel>
                );
              })}
            </Collapse>
          </SideBarLayout>
        </div>
        <div
          className={cn([
            "main-content-wrapper",
            { "sidebar-open": sidebarToggle }
          ])}
        >
          <Toolbar />
          <TableLayout>
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
              malesuada fameLorem ipsum dolor sit amet, consectetur adipiscing elit.  +
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
              malesuada fameLorem ipsum dolor sit amet, consectetur adipiscing elit.  +
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
              malesuada fameLorem ipsum dolor sit amet, consectetur adipiscing elit.  +
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
              malesuada fameLorem ipsum dolor sit amet, consectetur adipiscing elit.  +
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
              malesuada fameLorem ipsum dolor sit amet, consectetur adipiscing elit.  +
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
              malesuada fameLorem ipsum dolor sit amet, consectetur adipiscing elit.  +
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
              malesuada fameLorem ipsum dolor sit amet, consectetur adipiscing elit.  +
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
              malesuada fameLorem ipsum dolor sit amet, consectetur adipiscing elit.  +
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
              malesuada fameLorem ipsum dolor sit amet, consectetur adipiscing elit.  +
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

          </TableLayout>
        </div>
      </div>
    );
  }
}

export default MainPage;
