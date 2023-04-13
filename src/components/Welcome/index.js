// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  renderAuthButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="container">
        <h1 className="main-heading">Welcome</h1>
        <h2 className="heading">Thank you! Happy Learning</h2>
        <button
          type="button"
          className="button"
          onClick={this.renderAuthButton}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
