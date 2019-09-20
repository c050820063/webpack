import React from 'react'
import ReactDOM from 'react-dom'

interface IProps {
  test?: number
}
const state = { number: 0 };
type State = Readonly<typeof state>;
class Counter extends React.Component<IProps, State>{
  state: State = state
  handleClick = () => {
    this.setState({ number: this.state.number + 1 })
  }
  render() {
    const { number } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>点击</button>
        {number}
      </div>
    )
  }
}

ReactDOM.render(<Counter/>, document.getElementById('root'))
