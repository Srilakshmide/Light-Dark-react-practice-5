import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true, Text: true, isHeading: true}

  onDarkMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
    this.setState(prevState => ({Text: !prevState.Text}))
    this.setState(prevState => ({isHeading: !prevState.isHeading}))
  }

  getBackground = () => {
    const {isDarkMode} = this.state

    return isDarkMode ? 'background-light' : 'background-dark'
  }

  getText = () => {
    const {Text} = this.state

    return Text ? 'Light Mode' : 'Dark Mode'
  }

  getHeading = () => {
    const {isHeading} = this.state

    return isHeading ? 'color-black' : 'color-light'
  }

  render() {
    const className = this.getBackground()
    const buttonText = this.getText()
    const headingClassName = this.getHeading()

    return (
      <div className="light-container">
        <div className={`${className}`}>
          <h1 className={`heading ${headingClassName}`}>
            Click To Change Mode
          </h1>
          <button type="button" className="button" onClick={this.onDarkMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
