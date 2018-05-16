import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({
    width,
    height,
    padding,
    color,
    borderRadius,
  }) => ({
    width, height, padding, borderRadius, color,
  })}
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${props => props.backgroundColor};
  border: 4px solid ${props => props.borderColor};
  &:after, &:before {
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    ${props => props.top && css`
      bottom: 100%;
      left: 50%;
    `}
    ${props => props.bottom && css`
      top: 100%;
      left: 50%;
    `}
    ${props => props.left && css`
      right: 100%;
      top: 50%;
    `}
    ${props => props.right && css`
      left: 100%;
      top: 50%;
    `}
  }
  &:after {
    border-color: rgba(136, 183, 213, 0);
    border-width: ${props => props.size}px;
    ${props => props.top && css`
      border-bottom-color: ${() => props.backgroundColor};
      margin-left: ${() => 0 - props.size}px;
    `}
    ${props => props.bottom && css`
      border-top-color: ${() => props.backgroundColor};
      margin-left: ${() => 0 - props.size}px;
    `}
    ${props => props.left && css`
      border-right-color: ${() => props.backgroundColor};
      margin-top: ${() => 0 - props.size}px;
    `}
    ${props => props.right && css`
      border-left-color: ${() => props.backgroundColor};
      margin-top: ${() => 0 - props.size}px;
    `}
  }
  &:before {
    border-color: rgba(194, 225, 245, 0);
    border-width: ${props => props.size + 6}px;
    ${props => props.top && css`
      border-bottom-color: ${() => props.borderColor};
      margin-left: ${() => -6 - props.size}px;
    `}
    ${props => props.bottom && css`
      border-top-color: ${() => props.borderColor};
      margin-left: ${() => -6 - props.size}px;
    `}
    ${props => props.left && css`
      border-right-color: ${() => props.borderColor};
      margin-top: ${() => -6 - props.size}px;
    `}
    ${props => props.right && css`
      border-left-color: ${() => props.borderColor};
      margin-top: ${() => -6 - props.size}px;
    `}
  }
`;

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
  width: 'auto',
  size: 20,
  top: false,
  borderRadius: '0',
  left: false,
  right: false,
  bottom: false,
  children: null,
};

export default PointingBox;
