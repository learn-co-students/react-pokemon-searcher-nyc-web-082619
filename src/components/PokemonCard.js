import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

    state = {
      pokemonCard: "pokemonFrontImageUrl"
    }

    handleClick = () => {
      if (this.state.pokemonCard === "pokemonFrontImageUrl") {
        this.setState({pokemonCard: "pokemonBackImageUrl"})
      } else if (this.state.pokemonCard === "pokemonBackImageUrl") {
        this.setState({pokemonCard: "pokemonFrontImageUrl"})
      }

    }


  render() {
    // console.log(this.props.pokemonStats)
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            <img src={this.props[this.state.pokemonCard]} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonName}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonStats.find((stat) => {return stat.name === 'hp'}).value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
