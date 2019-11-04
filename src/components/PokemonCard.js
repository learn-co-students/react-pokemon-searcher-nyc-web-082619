import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    pokeCardFront: true
  }

  flipCard = () => {
    if (this.state.pokeCardFront)
      this.setState({pokeCardFront: false})
    else
      this.setState({pokeCardFront: true})
  }

  
  render() {
    // console.log(this.state.pokeCardFront)
    return (
      <Card onClick={this.flipCard}>
        <div>
          <div className="image">
            <img src={this.state.pokeCardFront ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
