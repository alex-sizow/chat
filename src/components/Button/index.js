import React from "react";
import PropTypes from "prop-types";
import { Button as BaseButton, Button } from "antd";//переименовка для импорта
import classNames from 'classnames';
import "./Button.scss";

export default props => {
  return <BaseButton {...props} className={classNames('button', props.className)} />
};

Button.propTypes = {
  className: PropTypes.string
};
