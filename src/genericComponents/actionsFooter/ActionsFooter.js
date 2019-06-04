import React from 'react';
import {Button} from "antd";
import style from "./ActionsFooter.module.scss";
import { TEXTS } from "Utils/constants";

const ActionsFooter = ({disabled, doneHandler, cancelHandler, disableCancel}) => {

  return (
    <footer className={`${style["actions-footer-wrapper"]}`}>
      {!disableCancel &&
      <button className='button-cancel'
        disabled={disableCancel}
        onClick={cancelHandler}
        id="button-cancel"
      >
        {TEXTS.cancel}
      </button>}
      <Button
        disabled={disabled}
        onClick={doneHandler}
        type={disabled ? "default" : "primary"}
        id="button-done"
      >
        {TEXTS.done}
      </Button>
    </footer>
  );
};

export default ActionsFooter;

