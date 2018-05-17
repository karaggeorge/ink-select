const {h, Component, Color} = require('ink');
const PropTypes = require('prop-types');
const figures = require('figures');
const Cursor = require('./cursor');
const Option = require('./option');
const Separator = require('./separator');

const stdin = process.stdin;

class Select extends Component {
  constructor(props) {
    super(props);

    const {options, children} = props;

    this.state = {
      cursor: 0,
      options: options ? options.map(props => props.value ? <Option {...props}/> : <Separator {...props}/>) : children
    };

    this.move = this.move.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
  }

  componentDidMount() {
    stdin.on('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    stdin.removeListener('keypress', this.handleKeyPress);
  }

  move(index, step) {
    const {length} = this.state.options;
    return (index + step + length) % length;
  }

  handleSelect(index) {
    const {onSelect} = this.props;
    const {options} = this.state;
    const selected = options[index].props;

    if (onSelect) {
      onSelect(selected.value);
    }
    if (selected.onSelect) {
      selected.onSelect();
    }
  }

  handleChange(index) {
    const {onChange} = this.props;
    const {options} = this.state;
    const {value} = options[index].props;

    if (onChange) {
      onChange(value);
    }
    this.setState({cursor: index});
  }

  handleKeyPress(ch, key) {
    const {cursor, options} = this.state;

    switch (key.name) {
      case 'up': {
        let nextIndex = this.move(cursor, -1);
        while (!options[nextIndex].props.value) {
          nextIndex = this.move(nextIndex, -1);
        }

        this.handleChange(nextIndex);
        break;
      }
      case 'down': {
        let nextIndex = this.move(cursor, 1);
        while (!options[nextIndex].props.value) {
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

  renderOptions() {
    const {cursorCharacter} = this.props;
    const {cursor, options} = this.state;

    return options.map(
      (option, i) => (
        <Color blue={cursor === i}>
          <Cursor isActive={cursor === i} cursorCharacter={cursorCharacter}/>
          {option}
        </Color>
      )
    );
  }

  render() {
    return (
      <span>
        {this.renderOptions()}
      </span>
    );
  }
}

Select.propTypes = {
  cursorCharacter: PropTypes.string,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object)
};

Select.defaultProps = {
  cursorCharacter: figures.pointer
};

module.exports = Select;
