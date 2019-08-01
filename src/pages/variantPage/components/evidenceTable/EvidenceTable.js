import React, { Component } from "react";
import style from "./EvidenceTable.module.scss";
// import PropTypes from 'prop-types';
import { Tabs, Button } from 'antd';
import TabPaneContent from "variantComponents/evidenceTable/components/tabPaneContent";

const { TabPane } = Tabs;
const operations = <Button>Extra Action</Button>;

class EvidenceTable extends Component {
  render() {
    return (
      <div className={style["evidence-wrapper"]}>
        <div className="evidence-title">Evidence:</div>
        <Tabs tabBarExtraContent={operations} size={"large"}>
          <TabPane
            tab={<TabPaneContent amount={5} title={"Publications"}/>}
            key="1">
            Content of tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of tab 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

EvidenceTable.propTypes = {};

export default EvidenceTable;
