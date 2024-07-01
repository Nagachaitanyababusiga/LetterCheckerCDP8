import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputContent: ''}

  Change = event => {
    this.setState(() => ({
      inputContent: event.target.value,
    }))
  }

  render() {
    const {inputContent} = this.state
    return (
      <div className="cont-1">
        <div className="cont-2">
          <h1 className="header">Calculate the Letters you enter</h1>
          <label className="prompter" htmlFor="id1">
            Enter the phrase
          </label>
          <input
            id="id1"
            className="input-styler"
            onChange={this.Change}
            placeholder="Enter the phrase"
          />
          <p className="result">No.of letters: {inputContent.length}</p>
        </div>
        <img
          className="imager"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    )
  }
}

export default LettersCalculator
