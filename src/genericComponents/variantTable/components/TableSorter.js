import React, {Component} from "react";
// import { ReactComponent as DropdownArrow } from "Assets/dropdownArrow.svg";
import { SORTING_ORDER } from "../../../utils/constants";


class TableSorter extends Component{

  state = {
    clicksCounter: 1
  }

  handleSort = () =>{

    const {setSort, field} = this.props;

    const {clicksCounter} = this.state;

    if(this.state.clicksCounter < 2){
      this.setState({clicksCounter: clicksCounter + 1});
    }else if(clicksCounter >= 2){
      this.setState({clicksCounter: 0});
    }

    // let order = clicksCounter === 0 ? SORTING_ORDER["default"] ? clicksCounter === 1 ? SORTING_ORDER["ascending"] : SORTING_ORDER["descending"]
    let order = "";

    switch(clicksCounter){
      case 0: order = SORTING_ORDER["default"];
        break;
      case 1: order = SORTING_ORDER["ascending"];
        break;
      case 2: order = SORTING_ORDER["descending"];
        break;
    }

    setSort({field, order});

  }



  render() {
    const {title} = this.props;

    return(
      <div className="flex items-center table-sorter-wrapper" onClick={() => this.handleSort()}>

        <div className="table-sorter-title">
          {title}
        </div>
        {
          /* <div className="flex flex-column">
         <DropdownArrow className="top-arrow" onClick={()=> setSort({field: "vaf", order: SORTING_ORDER.descending})} />
         <DropdownArrow onClick={()=> setSort({field: "vaf", order: SORTING_ORDER.ascending})} />
       </div>*/
        }

      </div>
    );
  }
}

export default TableSorter;