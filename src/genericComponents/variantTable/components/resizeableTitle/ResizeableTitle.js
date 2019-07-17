import React from 'react';
import PropTypes from 'prop-types';
import { Resizable } from "react-resizable";

const ResizeableTitle = ({ width, onResize, ...restProps }) => {

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};

ResizeableTitle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onResize: PropTypes.func.isRequired
};

ResizeableTitle.defaultProps = {};

export default ResizeableTitle;
