const {h, Component} = require('ink');
const PropTypes = require('prop-types');
const Cursor = require('./cursor');
const figures = require('figures');

const stdin = process.stdin;

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor: 0
    };

    this.move = this.move.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    stdin.on('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    stdin.removeListener('keypress', this.handleKeyPress);
  }

  move(index, step) {
    const {length} = this.props.children;
    return (index + step + length) % length;
  }

  handleSelect(index) {
    const {children, onSelect} = this.props;
    const selected = children[index].props;

    if (onSelect) {
      onSelect(selected.value);
    }
    if (selected.onSelect) {
      selected.onSelect();
    }
  }

  handleChange(index) {
    const {children, onChange} = this.props;
    const {value} = children[index].props;

    if (onChange) {
      onChange(value);
    }
    this.setState({cursor: index});
  }

  handleKeyPress(ch, key) {
    const {cursor} = this.state;
    const {children} = this.props;

    switch (key.name) {
      case 'up': {
        let nextIndex = this.move(cursor, -1);
        while (!children[nextIndex].props.value) {
          nextIndex = this.move(nextIndex, -1);
        }

        this.handleChange(nextIndex);
        break;
      }
      case 'down': {
        let nextIndex = this.move(cursor, 1);
        while (!children[nextIndex].props.value) {
          nextIndex = this.move(nextIndex, 1);
        }

        this.handleChange(nextIndex);
        break;
      }
      case 'space':
      case 'return': {
        this.handleSelect(cursor);
        break;
      }
      default: break;
    }
  }

  render(props) {
    const {cursor} = this.state;
    const {cursorCharacter} = props;

    return (
      <span>
        {
          props.children.map((option, i) => (
            <span>
              <Cursor isActive={cursor === i} cursorCharacter={cursorCharacter}/>
              {option}
            </span>
          ))
        }
      </span>
    );
  }
}

Select.propTypes = {
  cursorCharacter: PropTypes.string,
  onChange: PropTypes.func,
  onSelect: PropTypes.func
};

Select.defaultProps = {
  cursorCharacter: figures.pointer
};

module.exports = Select;
