import React from 'react';
import {Checkbox} from "antd";

const SimpleCheckBox = ({label}) => {
  return (
    <Checkbox
      // className="flex"
    >
      {label}
    </Checkbox>
  );
};

export default SimpleCheckBox;
