const {h} = require('ink');
const PropTypes = require('prop-types');

const Option = ({children}) => (
  <span><div>{children}</div></span>
);

Option.propTypes = {
  value: PropTypes.any.isRequired
};

module.exports = Option;
