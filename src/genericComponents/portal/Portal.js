import {PureComponent} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import './style.scss';

let portalRoot = document.getElementById('portal');
if (!portalRoot) {
  portalRoot = document.createElement('div');
  portalRoot.id = 'portal';
  document.body.appendChild(portalRoot);
}

class Portal extends PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    !props?.pure && this.el.classList.add('portal-wrapper');
    this.elin = document.createElement('div');
    !props?.pure && this.elin.classList.add('portal');
    this.el.appendChild(this.elin);
  }

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    const {children} = this.props;
    return ReactDom.createPortal(children, this.el);
  }
}

Portal.propTypes = {
  pure: PropTypes.bool
};
Portal.defaultProps = {
  pure: false
};

export default Portal;
