import React, { Component } from "react";
import style from "./MainPage.module.scss";
import cn from "classnames";
import SideBarLayout from "./components/sideBarLayout";
import SelectionGroup from "../../genericComponents/selectionGroup";
import { Collapse } from "antd";
import filtersConfig from "./filtersConfig";

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
      sidebarToggle: false,
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
          <h1>Page content</h1>
        </div>
      </div>
    );
  }
}

export default MainPage;


