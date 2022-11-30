import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
    total: 0,
  }

  getTossResult = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    const {imageUrl} = this.state
    if (tossResult === 0) {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
    } else {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
    }
    return imageUrl
  }

  render() {
    const {imageUrl, headsCount, tailsCount, total} = this.state
    return (
      <div className="container">
        <div className="toss-result-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={imageUrl} className="toss-img" alt="toss result" />
          <button
            type="button"
            className="toss-btn"
            onClick={this.getTossResult}
          >
            Toss Coin
          </button>
          <div className="results-container">
            <p className="list-style">Total:{total}</p>
            <p className="list-style">Heads:{headsCount}</p>
            <p className="list-style">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
