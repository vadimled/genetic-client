import React from 'react';
import Portal from "../portal";

import './style.scss';

const Spinner = () => {
  return (
    <Portal>
      <div className="lds-ring">
        <div className="lds-ring__child lds-ring__child--first" />
        <div className="lds-ring__child lds-ring__child--second" />
        <div className="lds-ring__child lds-ring__child--third" />
        <div className="lds-ring__child lds-ring__child--fourth" />
      </div>
    </Portal>
  );
};

export default React.memo(Spinner);
