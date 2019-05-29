import React, { Component } from "react";
import style from "./MainPage.module.scss";
import cn from "classnames";
import SideBarLayout from "./components/sideBarLayout";
import SelectionGroup from "GenericComponents/selectionGroup";
import { Collapse } from "antd";
import filtersConfig from "./filtersConfig";

import { FILTERS } from "Utils/constants"; // todo: remove


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
        [FILTERS.type]: "germline",
        [FILTERS.variantClass]: ['unclassified', 'lben'],
        [FILTERS.hotSpot]: true,
        [FILTERS.snp]: null,
        [FILTERS.roi]: null,
        [FILTERS.gnomId]: null
      }
    };
  }

  handleClick = () => {
    this.setState({
      sidebarToggle: !this.state.sidebarToggle
    });
  };

  onChange = (filterSection, filterItemId) => {
    console.log("filterSection", filterSection);
    console.log('filterItemId', filterItemId);
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
                      onChange={this.onChange.bind(this, key)}
                      values={filters[key]}
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


