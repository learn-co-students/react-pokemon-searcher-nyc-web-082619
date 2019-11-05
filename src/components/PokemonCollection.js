import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  renderPokemon = () => {
    return this.props.pokemon.map(pokemon => {
      return(
        <PokemonCard 
          name={pokemon.name} 
          frontImage={pokemon.sprites.front}
          backImage={pokemon.sprites.back}
          hp={pokemon.stats[5].value}
        />
      )
    })
  }

  render() {
    console.log(this.props.pokemon)
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        <br/>
        {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
