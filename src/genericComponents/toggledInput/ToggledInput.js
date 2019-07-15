import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import cn from 'classnames';

import style from './ToggledInput.module.scss';

const ToggledInput = ({
  label,
  value,
  onChange,
  className
}) => {
  const [condition, setCondition] = useState(false);

  const handleCondition = () => setCondition(!condition);

  return (
    <div className={cn(style['toggled-input'], className)}>
      <div className="ti-wrapper">
        {label &&
          <div className="ti-label">
            {label}:
          </div>
        }
        <div className="ti-value">
          {!condition &&
            <div className="ti-text-value">
              {value}
            </div>
          }
          {condition &&
            <Input
              className="ti-input-value"
              allowClear
              value={value}
              onChange={onChange}
            />
          }
        </div>
        <button
          className={cn("ti-handler", {
            active: condition
          })}
          onClick={handleCondition}
        />
      </div>
    </div>
  );
};

ToggledInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};
ToggledInput.defaultProps = {
  label: '',
  value: '',
  className: ''
};

export default React.memo(ToggledInput);
