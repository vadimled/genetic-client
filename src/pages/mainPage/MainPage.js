import React, { Component } from "react";
import style from "./MainPage.module.scss";
import cn from "classnames";
import SideBarLayout from "./components/sideBarLayout";
import SelectionGroup from "../../genericComponents/selectionGroup";
import { TAG_COLORS } from "../../utils/constants";
import { Icon, Collapse } from "antd";


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
      variantClassFilterItems: [
        { tagColor: TAG_COLORS.white, label: "Unclassified" },
        { tagColor: TAG_COLORS.red, label: "PATH" },
        { tagColor: TAG_COLORS.orange, label: "LATH" },
        { tagColor: TAG_COLORS.yellow, label: "VUS" },
        { tagColor: TAG_COLORS.blueLight, label: "LBEN" },
        { tagColor: TAG_COLORS.blue, label: "BEN" }
      ],

      typeFilterItems: [
        { label: "Somatic" },
        { label: "Germline" },
        { label: "ACMG" }
      ],

      hotSpotFilterItems: [
        { label: "True", icon: <Icon type="check" /> },
        { label: "False", icon: <Icon type="close" /> }
      ],

      snpFilterItems: [
        { label: "True", icon: <Icon type="check" /> },
        { label: "False", icon: <Icon type="close" /> }
      ],

      roiFilterItems: [
        { label: "True", icon: <Icon type="check" /> },
        { label: "False", icon: <Icon type="close" /> }
      ],

      gnomIdFilterItems: [
        { value: "na", label: "NA" },
        { value: "veryRare", label: "very rare(0-1%)" },
        { value: "rare", label: "rare (1-5%)" },
        { value: "common", label: "common (>5%)" }
      ]
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
            <Collapse
              defaultActiveKey={["1"]}
              onChange={callback}
              expandIcon={({ isActive }) => (
                <Arrow dir={!isActive ? "right" : "down"} />
              )}
            >

              <Panel header="Variant Class" key="1">
                <SelectionGroup
                  mode="single"
                  filterItems={this.state.typeFilterItems}
                />
              </Panel>

              <Panel header="Type" key="2">
                <SelectionGroup
                  mode="multiple"
                  filterItems={this.state.variantClassFilterItems}
                />
              </Panel>

              <Panel header="Hot Spot" key="3">
                <SelectionGroup
                  mode="single"
                  filterItems={this.state.hotSpotFilterItems}
                />
              </Panel>

              <Panel header="SNP" key="4">
                <SelectionGroup
                  mode="single"
                  filterItems={this.state.snpFilterItems}
                />
              </Panel>

              <Panel header="ROI" key="5">
                <SelectionGroup
                  mode="single"
                  filterItems={this.state.roiFilterItems}
                />
              </Panel>
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
