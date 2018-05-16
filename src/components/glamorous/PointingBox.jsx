import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Container = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '&:after, &:before': {
    border: 'solid transparent',
    content: ' ',
    height: 0,
    width: 0,
    position: 'absolute',
    pointerEvents: 'none',
  },
  '&:after': {
    borderColor: 'rgba(136, 183, 213, 0)',
  },
  '&:before': {
    borderColor: 'rgba(194, 225, 245, 0)',
  },
}, ({
  top,
  left,
  right,
  bottom,
  backgroundColor,
  borderColor,
  width,
  height,
  size,
  padding,
  color,
  borderRadius,
}) => {
  let topStyle = null;
  let leftStyle = null;

  if (bottom) {
    topStyle = '100%';
  } else if (right || left) {
    topStyle = '50%';
  }

  if (right) {
    leftStyle = '100%';
  } else if (top || bottom) {
    leftStyle = '50%';
  }

  return {
    width,
    height,
    padding,
    color,
    borderRadius,
    background: backgroundColor,
    border: `4px solid ${borderColor}`,
    '&:after, &:before': {
      bottom: top ? '100%' : null,
      top: topStyle,
      left: leftStyle,
      right: left ? '100%' : null,
    },
    '&:after': {
      borderWidth: size,
      marginLeft: top || bottom ? 0 - size : null,
      marginTop: left || right ? 0 - size : null,
      borderBottomColor: top ? backgroundColor : null,
      borderTopColor: bottom ? backgroundColor : null,
      borderLeftColor: right ? backgroundColor : null,
      borderRightColor: left ? backgroundColor : null,
    },
    '&:before': {
      borderWidth: size + 6,
      marginLeft: top || bottom ? -6 - size : null,
      marginTop: left || right ? -6 - size : null,
      borderBottomColor: top ? borderColor : null,
      borderTopColor: bottom ? borderColor : null,
      borderLeftColor: right ? borderColor : null,
      borderRightColor: left ? borderColor : null,
    },
  };
});

const PointingBox = props => (
  <Container {...props}>
    {props.children}
  </Container>
);

PointingBox.propTypes = {
  width: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  top: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

PointingBox.defaultProps = {
  color: 'white',
  backgroundColor: 'red',
  borderColor: 'green',
  width: 'auto',
  size: 20,
  borderRadius: '0',
  top: false,
  left: false,
  right: false,
  bottom: false,
  children: null,
};

export default PointingBox;
