import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Tooltip, Modal, Button } from "antd";
import { Resizable } from "react-resizable";
import SimpleSelect from "GenericComponents/simpleSelect";
import Notes from "Pages/mainPage/components/notes";
import {
  ZYGOSITY_OPTIONS,
  GERMLINE_VARIANT_CLASS_OPTIONS,
  SOMATIC_VARIANT_CLASS_OPTIONS
} from "Utils/constants";
import ExternalLink from "GenericComponents/externalLink";
// import activityLogIcon from "Assets/activityLogIcon.svg";
import { ReactComponent as ActivityLogIcon } from "Assets/activityLogIcon.svg";
import style from "./VariantTable.module.scss";
import ActiveLogDetails from "./components/ActivityLogDetails";
import { ReactComponent as AvatarName } from "Assets/avatarName.svg";
import { ReactComponent as ArrowRight } from "Assets/arrowRight.svg";
import Tag from "../tag";

const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};

const ActivityLogPopupTableRecord = () => {
  return(
    <div className="flex flex-wrap content-start">
      <div className="cell border flex items-center">
        <AvatarName />
        <span className="user-name">Primary Analyst</span>
      </div>
      <div className="cell border flex items-center justify-between">
        <div className="flex items-center checkbox-inner-content">
          <Tag color="red" />
          <span>
            PATH
          </span>
        </div>
        <ArrowRight />
        <div className="flex items-center checkbox-inner-content">
          <Tag color="orange" />
          <span>
            LPATH
          </span>
        </div>
      </div>
      <div className="cell border flex items-center">
        13:37, 4 June 2019
      </div>
    </div>
  );
};

class ActivityLogPopup extends Component {
  render() {
    console.log(this.props);

    const { visible, handleOk, handleCancel } = this.props;
    const data = this.props[1];

    return (
      <Modal
        width={640}
        title="Activity log"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={[
          <Button key="submit" type="primary" onClick={handleOk} size={"large"}>
            Close
          </Button>
        ]}
      >
        <p>{data.gene}</p>
        <div className="activity-items-table">
          <div className="table-header">
            <div className="cell header-cell border">Role</div>
            <div className="cell header-cell border">Action</div>
            <div className="cell header-cell border">Timestamp</div>
          </div>
          <ActivityLogPopupTableRecord />
          <ActivityLogPopupTableRecord />
          <ActivityLogPopupTableRecord />
        </div>
      </Modal>
    );
  }
}

class ActivityLog extends Component {
  state = {
    isActivityDetailsShow: false,
    isActivityPopupShow: false
  };

  showActivityPopup = () => {
    this.setState({
      isActivityPopupShow: true
    });
  };

  showActivityDetails = () => {
    this.setState({ isActivityDetailsShow: true });
  };

  hideActivityDetails = () => {
    this.setState({ isActivityDetailsShow: false });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      isActivityPopupShow: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      isActivityPopupShow: false
    });
  };

  render() {
    // console.log("--activity props: ", this.props);

    return (
      <div className="activity-icon-wrapper flex justify-center">
        {this.state.isActivityDetailsShow && <ActiveLogDetails />}
        {this.state.isActivityPopupShow && (
          <ActivityLogPopup
            visible={this.state.isActivityPopupShow}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
            {...this.props}
          />
        )}
        <div
          className="icon"
          onClick={this.showActivityPopup}
          onMouseOver={this.showActivityDetails}
          onMouseLeave={this.hideActivityDetails}
        >
          <ActivityLogIcon />
        </div>
      </div>
    );
  }
}

class VariantTable extends Component {
  state = {
    columns: [
      {
        title: "Gene",
        dataIndex: "gene",
        key: "2",
        width: 100
      },
      {
        title: "Chr: position",
        dataIndex: "chrPosition",
        key: "3",
        width: 200
      },
      {
        title: "Transcript",
        dataIndex: "transcript",
        key: "4",
        width: 150
      },
      {
        title: "Exon",
        dataIndex: "exon",
        key: "5",
        width: 40
      },
      {
        title: "Allele change",
        dataIndex: "alleleChange",
        key: "6",
        width: 80,

        render: (text, record) => {
          return (
            <Tooltip placement="top" title={record.alleleChangeLong}>
              <div>{text}</div>
            </Tooltip>
          );
        }
      },
      {
        title: "coding",
        dataIndex: "coding",
        key: "7",
        width: 80,
        render: (text, record) => {
          return (
            <Tooltip placement="top" title={record.codingLong}>
              <div>{text}</div>
            </Tooltip>
          );
        }
      },
      {
        title: "Protein",
        dataIndex: "protein",
        key: "8",
        width: 100
      },
      {
        title: "VAF",
        dataIndex: "vaf",
        key: "9",
        width: 50
      },
      {
        title: "Zygosity",
        dataIndex: "zygosity",
        key: "10",
        width: 150
      },
      {
        title: "Variant Class",
        dataIndex: "variantClass",
        key: "11",
        width: 170
      },
      {
        title: "coverage",
        dataIndex: "coverage",
        key: "12",
        width: 50
      },
      {
        title: "Notes",
        dataIndex: "notes",
        key: "13",
        width: 200
      },
      {
        title: "Activity log",
        dataIndex: "activityLog",
        key: "14",
        width: 200
      }
    ]
  };

  components = {
    header: {
      cell: ResizeableTitle
    }
  };

  handelChrPosition = (e, data) => {
    console.log({ e: e.target, data });
  };

  handleZygosity = (data) =>{

    console.log(data)

    const {handleZygosity, updateActivityLog} = this.props
    const {item, value, prevValue} = data;


    handleZygosity({
      item,
      value,
    });
    updateActivityLog({prevValue, item, changedField: "zygosity"})
  }

  columnsConverter = columns => {
    return columns.map((col, index) => {
      let column = {
        ...col,
        onHeaderCell: column => ({
          width: column.width,
          onResize: this.handleResize(index)
        })
      };

      if (column.dataIndex === "zygosity") {
        column.render = (...data) => (
          <div className="table-select-wrapper">
            <SimpleSelect
              value={data[1].zygosity}
              options={ZYGOSITY_OPTIONS}
              onChange={e =>
                this.handleZygosity({
                  item: data[1],
                  value: e.target.value,
                  prevValue: data[1].zygosity
                })
              }
            />
          </div>
        );
        column.className = "select";
      }

      if (column.dataIndex === "variantClass") {
        column.render = (...data) =>
          data[1].zygosity &&
          data[1].zygosity !== "insignificant" &&
          data[1].zygosity !== "notReal" &&
          data[1].zygosity !== "unknown" ? (
              <div className="table-select-wrapper">
                <SimpleSelect
                  value={data[1].variantClass}
                  options={
                    data[1].zygosity === "somatic"
                      ? SOMATIC_VARIANT_CLASS_OPTIONS
                      : GERMLINE_VARIANT_CLASS_OPTIONS
                  }
                  onChange={e =>
                    this.props.handleVariantClass({
                      item: data[1],
                      value: e.target.value
                    })
                  }
                />
              </div>
            ) : (
              ""
            );
        column.className = "select";
      }

      if (col.dataIndex === "notes") {
        column.render = (...data) => <Notes key={data[1].id} id={data[1].id} />;
      }

      if (col.dataIndex === "transcript") {
        column.render = (...data) => <ExternalLink data={data[1].transcript} />;
      }

      if (col.dataIndex === "chrPosition") {
        column.render = (...data) => {
          const { chrPosition } = data[1];
          return (
            <ExternalLink
              data={chrPosition}
              externalHandler={e => this.handelChrPosition(e, chrPosition)}
            />
          );
        };
      }

      if (col.dataIndex === "activityLog") {
        column.render = (...data) => {
          // const { chrPosition } = data[1];
          // console.log(data);
          return <ActivityLog {...data} />;
        };
      }

      return column;
    });
  };

  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width
      };
      return { columns: nextColumns };
    });
  };

  render() {
    const { selectedRowKeys, onSelectRowKey, data } = this.props;

    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: selectedRowKeys => {
        onSelectRowKey(selectedRowKeys);
      },
      selectedRowKeys,
      fixed: "left"
    };

    // add options to columns
    const columns = this.columnsConverter(this.state.columns);

    return (
      <Table
        className={style["variant-table-wrapper"]}
        components={this.components}
        rowSelection={rowSelection}
        bordered
        columns={columns}
        dataSource={data}
        scroll={{ x: "max-content" }}
      />
    );
  }
}

VariantTable.propTypes = {
  data: PropTypes.array,
  selectedRowKeys: PropTypes.array,
  onSelectRowKey: PropTypes.func.isRequired,
  handleZygosity: PropTypes.func.isRequired,
  handleVariantClass: PropTypes.func.isRequired
};

VariantTable.defaultProps = {
  data: [],
  selectedRowKeys: []
};

export default VariantTable;
