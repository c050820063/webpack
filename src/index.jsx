import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Item extends React.Component {
  constructor () {
    super()
    this.state = {
      flag: true
    }
  }

  handleToggle () {
    this.setState({
      flag: !this.state.flag
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.handleToggle.bind(this)}>切换</button>
        <div className={this.state.flag ? 'dc' : 'dd'}>123</div>
      </div>
    )
  }
}

ReactDOM.render(
  <div className="style">
    <Item />
    <img src={require('./bg.jpg')} alt="" />
  </div>,
  document.getElementById('root')
)
