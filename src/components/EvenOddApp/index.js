// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const min = 1
    const max = 100

    const randomNumber = min + Math.random() * (max - min)
    const number = Math.floor(randomNumber)
    this.setState(prevState => ({
      count: prevState.count + number,
    }))
  }

  render() {
    const {count} = this.state
    const counterText = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="caption">{counterText}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
