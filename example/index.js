const {h, Component, render, Text} = require('ink');
const {Select, Option, Separator} = require('../lib');

class Example extends Component {
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


const unmount = render(<Example />);
