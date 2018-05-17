import PropTypes from 'prop-types';

export const propTypes = {
  width: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  borderColor: PropTypes.string,
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

export const defaultProps = {
  backgroundColor: 'red',
  borderColor: 'green',
  color: 'white',
  width: '300px',
  height: '300px',
  size: 20,
  borderRadius: '0',
  top: false,
  left: false,
  right: false,
  bottom: false,
  children: null,
};
