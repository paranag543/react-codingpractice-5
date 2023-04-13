// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFname: false, isLname: false}

  onClickFirstButton = () => {
    const {isFname} = this.state
    this.setState({isFname: !isFname})
  }

  onClickLastButton = () => {
    const {isLname} = this.state
    this.setState({isLname: !isLname})
  }

  render() {
    const {isFname, isLname} = this.state
    return (
      <div className="app-container">
        <h1>Show/Hide</h1>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.onClickFirstButton}
          >
            Show/Hide Firstname
          </button>
          {isFname ? <p className="name-card"> Joe</p> : ''}
          <button
            type="button"
            className="button"
            onClick={this.onClickLastButton}
          >
            Show/Hide Lastname
          </button>
          {isLname ? <p className="name-card"> Jonas</p> : ''}
        </div>
      </div>
    )
  }
}

export default ShowHide
