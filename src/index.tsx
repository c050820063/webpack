import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

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
// if(module.hot){ // 如果支持热更新
//   module.hot.accept(); // 当入口文件变化后重新执行当前入口文件
// }

ReactDOM.render(<Counter/>, document.getElementById('root'))
