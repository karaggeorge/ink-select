const {h} = require('ink');
const PropTypes = require('prop-types');

const Separator = ({label}) => (
  <span><div>{label}</div></span>
);

Separator.propTypes = {
  label: PropTypes.string
};

Separator.defaultProps = {
  label: '—————'
};

module.exports = Separator;
