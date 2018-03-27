const {h} = require('ink');
const PropTypes = require('prop-types');

const Cursor = ({cursorCharacter, isActive}) => (
  <span>{isActive ? `${cursorCharacter} ` : '\u00A0'.repeat(cursorCharacter.length + 1)}</span>
);

Cursor.propTypes = {
  isActive: PropTypes.bool,
  cursorCharacter: PropTypes.string
};

module.exports = Cursor;
