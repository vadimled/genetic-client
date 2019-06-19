import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ArrowDown from 'Assets/arrow-down.svg';
import { CONFIRMATION_VALUES } from 'Utils/constants';
import ConfirmationStatusPanel from './components/confirmationStatusPanel';
import style from './ConfirmationStatus.module.scss';

export default class ConfirmationStatus extends PureComponent {
  static propTypes = {
    status: PropTypes.string
  };
  static defaultProps = {
    status: 'pending'
  };

  constructor() {
    super();

    this.state = {
      isPanelOpen: false
    };

    this.confStatusComponent = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  handleClickOutside = (e) => {
    if (
      !e?.path?.includes(this.confStatusComponent?.current) &&
      this.state.isPanelOpen
    ) {
      this.handlePanelOpen();
    }
  };

  handlePanelOpen = () => {
    this.setState({
      isPanelOpen: !this.state.isPanelOpen
    });
  };

  render() {
    const { status } = this.props;

    return (
      <div
        className={style["confirmation-status"]}
        ref={this.confStatusComponent}
      >
        <div
          className="panel-trigger"
          onClick={this.handlePanelOpen}
        >
          <div
            className="confirmation-icon"
            style={{
              backgroundImage: `url(${CONFIRMATION_VALUES[status]?.iconImg})`
            }}
          />
          <div
            className="confirmation-arrow-down"
            style={{
              backgroundImage: `url(${ArrowDown})`
            }}
          />
        </div>

        {!!this.state.isPanelOpen && <div className="confirmation-config-panel">
          <ConfirmationStatusPanel
            handleStatus={(status) => console.log('status', status)}
          />
        </div>}

      </div>
    );
  }
}
