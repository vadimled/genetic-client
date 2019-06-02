import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./MainPage.module.scss";
import cn from "classnames";
import SideBarLayout from "./components/sideBarLayout";
import SelectionGroup from "GenericComponents/selectionGroup";
import { Collapse } from "antd";
import filtersConfig from "./filtersConfig";
import Toolbar from "./components/toolbar";
import TableLayout from "./components/tableLayout";
import {
  getFilterType,
  getFilterVariantClass,
  getFilterHotSpot,
  getFilterSnp,
  getFilterRoi,
  getFilterGnomId,
  getFilteredData
} from "Store/selectors";
import {
  setFilterType,
  setFilterVariantClass,
  setFilterHotSpot,
  setFilterSnp,
  setFilterRoi,
  setFilterGnomId
} from "Actions/filtersActions";
// import { FILTERS } from "Utils/constants";
import VariantTable from "GenericComponents/variantTable";

// eslint-disable-next-line
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

// const data = [
//   {
//     gene: "SDHA",
//     chrPosition: "Chr5 : 236628",
//     transcript: "NM_005591.3",
//     exon: 7,
//     alleleChange: "C > T",
//     coding: "gCc/gTc",
//     protein: "A449V",
//     vaf: 33,
//     zygosity: "Hom",
//     variantClass: "",
//     coverage: 300,
//     hotSpot: "yes"
//   },
//   {
//     gene: "PDG",
//     chrPosition: "Chr5 : 236628",
//     transcript: "NM_005591.3",
//     exon: 1,
//     alleleChange: "C > T",
//     coding: "gCc/gTc",
//     protein: "A449V",
//     vaf: 1,
//     zygosity: "Hetro",
//     variantClass: "",
//     coverage: 20,
//     hotSpot: "no"
//   }
// ];

const Arrow = ({ dir }) => <i className={`${dir} arrow`} />;

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarToggle: false,
      // filters: {
      //   [FILTERS.type]: "germline",
      //   [FILTERS.variantClass]: ["unclassified", "lben"],
      //   [FILTERS.hotSpot]: true,
      //   [FILTERS.snp]: null,
      //   [FILTERS.roi]: null,
      //   [FILTERS.gnomId]: null
      // }
    };
  }

  handleClick = () => {
    this.setState({
      sidebarToggle: !this.state.sidebarToggle
    });
  };

  onChange = (filterSection, filterItemId) => {
    console.log('filterSection: ', filterSection)
    console.log('filterItemId: ', filterItemId)

    const {
      setFilterType,
      setFilterVariantClass,
      setFilterHotSpot,
      setFilterSnp,
      setFilterRoi,
      setFilterGnomId
    } = this.props;

    switch (filterSection) {
      case 'type':
        setFilterType({ value: filterItemId });
        break;
      case 'variantClass':
        setFilterVariantClass({ value: filterItemId });
        break;
      case 'hotSpot':
        setFilterHotSpot({ value: filterItemId });
        break;
      case 'snp':
        setFilterSnp({ value: filterItemId });
        break;
      case 'roi':
        setFilterRoi({ value: filterItemId });
        break;
      case 'gnomId':
        setFilterGnomId({ value: filterItemId });
        break;
    }
  };

  render() {
    const { sidebarToggle } = this.state;
    const { filters, data } = this.props;

    console.log(this.props.filters)

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
              {filtersConfig.map((key, i) => {
                console.log('666key: ', key)
                return (
                  <Panel header={key.name} key={i + 1}>
                    <SelectionGroup
                      mode={key.mode}
                      filterItems={key.items}
                      onChange={this.onChange.bind(this, key.id)}
                      values={filters[key.id]}
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
            <VariantTable data={data} />
          </TableLayout>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filters: {
      type: getFilterType(state),
      variantClass: getFilterVariantClass(state),
      hotSpot: getFilterHotSpot(state),
      snp: getFilterSnp(state),
      roi: getFilterRoi(state),
      gnomId: getFilterGnomId(state)
    },
    data: getFilteredData(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFilterType: data => dispatch(setFilterType(data)),
    setFilterVariantClass: data => dispatch(setFilterVariantClass(data)),
    setFilterHotSpot: data => dispatch(setFilterHotSpot(data)),
    setFilterSnp: data => dispatch(setFilterSnp(data)),
    setFilterRoi: data => dispatch(setFilterRoi(data)),
    setFilterGnomId: data => dispatch(setFilterGnomId(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
