import React, { Component } from 'react';
import classnames from 'classnames';

import { propTypes, defaultProps } from '../props';
import './PointingBox.scss';

class PointingBox extends Component {
  constructor(...args) {
    super(...args);

    this.updateStyleVariables = ({
      backgroundColor,
      borderSize,
      borderColor,
      size,
    }) => {
      // eslint-disable-next-line no-undef
      const doc = document;

      doc.documentElement.style.setProperty('--border-size', `${borderSize}px`);
      doc.documentElement.style.setProperty('--border-color', borderColor);
      doc.documentElement.style.setProperty('--background-color', backgroundColor);
      doc.documentElement.style.setProperty('--arrow-size', `${size}px`);
    };
  }

  componentDidMount() {
    this.updateStyleVariables(this.props);
  }

  componentDidUpdate() {
    this.updateStyleVariables(this.props);
  }

  render() {
    const {
      top,
      left,
      right,
      bottom,
    } = this.props;

    const classes = classnames('arrow_box', {
      top, left, right, bottom,
    });

    return (
      <div className={classes} style={{ ...this.props }}>
        {this.props.children}
      </div>
    );
  }
}

PointingBox.propTypes = propTypes;
PointingBox.defaultProps = defaultProps;

export default PointingBox;
