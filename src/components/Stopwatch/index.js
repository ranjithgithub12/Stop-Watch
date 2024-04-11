import {Component} from 'react'
import './index.css'

const initialState = {
  isTimmerIsRunning: false,
  timerInSeconds: 0,
  timerInMinutes: 0,
}
class Stopwatch extends Component {
  state = initialState

  componentWillUnmoun() {
    this.clearTimerInvertval()
  }

  clearTimerInvertval = () => clearInterval(this.intervalId)

  onIncrementSeconds = () => {
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  onClickStart = () => {
    const {isTimmerIsRunning} = this.state
    this.setState(prevState => ({
      isTimmerIsRunning:!prevState.isTimmerIsRunning
    }))
   
      this.intervalId = setInterval(this.onIncrementSeconds, 1000)
        
  }

  onClickStop = () => {
    this.setState(prevState => ({
      isTimmerIsRunning: !prevState.isTimmerIsRunning
    }))
    this.clearTimerInvertval()
  }

 onClickRestart = () => {
  this.clearTimerInvertval()
  this.setState(initialState)
 }
  getTimerInSecondsAndMinutes = () => {
    const {timerInMinutes, timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)
    const seconds = Math.floor(timerInSeconds % 60)
    const strinfiedInMinuted = minutes > 9 ? minutes : `0${minutes}`
    const strinfiedInSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${strinfiedInMinuted} : ${strinfiedInSeconds}`
  }

  render() {
    const {isTimmerIsRunning, timerInSeconds} = this.state
    
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="clock-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-content">Timer</p>
          </div>
          <h1>{this.getTimerInSecondsAndMinutes()}</h1>
          <div className="button-contianer">
            <button
              onClick={this.onClickStart}
              disabled={isTimmerIsRunning}
              className="start-button"
            >
              Start
            </button>
            <button onClick={this.onClickStop} className="stop-button">
              Stop
            </button>
            <button onClick={this.onClickRestart} className="restart-button">Reset</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
