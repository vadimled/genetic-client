import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ArrowDown from 'Assets/arrow-down.svg';
import { CONFIRMATION_VALUES } from 'Utils/constants';
import ConfirmationStatusPanel from './components/confirmationStatusPanel';
import Portal from 'GenericComponents/portal';
import style from './ConfirmationStatus.module.scss';

class ConfirmationStatus extends PureComponent {
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

  getPanelChords = () => {
    const wrapperChords = this?.confStatusComponent?.current?.getBoundingClientRect();
    const docHeight = document?.documentElement?.clientHeight;

    let data = {
      left: wrapperChords?.right
    };

    // consider that the panel dosn't hide behind the lower border of the screen
    if (wrapperChords?.top + 150 > docHeight) {
      data.bottom = 10;
    }
    else {
      data.top = wrapperChords?.top;
    }

    return data;
  };

  render() {
    const { status, handleStatus } = this.props;

    return (
      <div
        className={style["confirmation-status"]}
        ref={this.confStatusComponent}
        data-testid={`confirmation-${status}`}
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

        {!!this.state.isPanelOpen && <Portal pure>
          <div
            className="confirmation-config-panel"
            style={{
              position: "fixed",
              ...this.getPanelChords()
            }}
          >
            <ConfirmationStatusPanel
              handleStatus={handleStatus}
              selected={status}
            />
          </div>
        </Portal>}

      </div>
    );
  }
}

ConfirmationStatus.propTypes = {
  status: PropTypes.string,
  handleStatus: PropTypes.func.isRequired
};

ConfirmationStatus.defaultProps = {
  status: 'pending'
};

export default ConfirmationStatus;
