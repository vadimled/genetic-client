import React from 'react';
import defaultImage from '../../assets/EmptyState.svg';

import './EmptyState.scss';

const EmptyState = ({image, title, description}) => {
  return (
    <div className="c-empty-state">
      <div
        className="c-empty-state__image"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className="c-empty-state__title">{title}</div>
      <div className="c-empty-state__description">{description}</div>
    </div>
  );
};

EmptyState.defaultProps = {
  image: defaultImage,
  title: 'No results found',
  description: 'Try adjusting your search or filter to find what you’re looking for'
};

export default React.memo(EmptyState);
