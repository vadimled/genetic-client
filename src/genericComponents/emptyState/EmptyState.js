/**
  * Usage Example
  import EmptyState from 'GenericComponents/emptyState';
  <EmptyState />
*/

import React from 'react';
import PropTypes from "prop-types";
import defaultImage from 'Assets/EmptyState.svg';
import style from './EmptyState.module.scss';

const EmptyState = ({image, title, description}) => {
  return (
    <div className={style["empty-state"]} data-testid="empty-state">
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

EmptyState.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string
};

EmptyState.defaultProps = {
  image: defaultImage,
  title: 'No results found',
  description: 'Try adjusting your search or filter to find what you’re looking for'
};

export default React.memo(EmptyState);
