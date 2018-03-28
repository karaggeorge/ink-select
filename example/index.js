const {h, Component, render, Text} = require('ink');
const {Select, Option, Separator} = require('../lib');

class OptionsExample extends Component {
  render() {
    return (
      <div>
        <Select onSelect={item => this.setState({message: item + ' was selected'})}>
          <Option value='1'>One</Option>

          <Separator />

          <Option value='2' onSelect={() => this.setState({message: 'Action for Two'})}>Two</Option>

          <Separator label='======' />

          <Option value='3'>Three</Option>
        </Select>
        <br />
        { this.state && this.state.message && <Text green>{this.state.message}</Text>}
      </div>
    );
  }
}

class ArrayExample extends Component {
  render() {
    const options = [
      { label: 'One', value: 1 },
      { },
      { label: 'Two', value: 2, onSelect: () => this.setState({message: 'Action for Two'})},
      { label: '======' },
      { label: 'Three', value: 3 }
    ];

    return (
      <div>
        <Select options={options} onSelect={item => this.setState({message: item + ' was selected'})}/>
        <br />
        { this.state && this.state.message && <Text green>{this.state.message}</Text>}
      </div>
    );
  }
}

const unmount = render(<OptionsExample />);
