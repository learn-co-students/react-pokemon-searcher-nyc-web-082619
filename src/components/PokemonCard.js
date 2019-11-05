import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }

  handleClick = () => {
    return this.setState({
      front: !this.state.front
    })
  }

  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.state.front ? this.props.frontImage: this.props.backImage} alt="image of pokemon" />
          </div>
          <div className="content">
            <div className="header"> {this.props.name} </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
