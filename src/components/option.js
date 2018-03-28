const {h} = require('ink');
const PropTypes = require('prop-types');

const Option = ({children, label}) => (
  <span><div>{label || children}</div></span>
);

Option.propTypes = {
  value: PropTypes.any.isRequired,
  label: PropTypes.string
};

module.exports = Option;
