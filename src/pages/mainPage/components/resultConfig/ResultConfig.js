import React from 'react';
import SlideBar from "GenericComponents/slideBar";

const ResultConfig = () => {
  return (
    <SlideBar
      isOpen={true}
      onClose={() => true}
    >
      hey
    </SlideBar>
  );
};

ResultConfig.defaultProps = {
  propName: 'DefaultProp'
};

export default React.memo(ResultConfig);
