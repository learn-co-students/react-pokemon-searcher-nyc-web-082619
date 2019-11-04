import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // console.log(this.props.pokemon)
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(pokemon =>{
          return <PokemonCard
            pokemonName={pokemon.name}
            pokemonFrontImageUrl={pokemon.sprites.front}
            pokemonBackImageUrl={pokemon.sprites.back}
            pokemonStats={pokemon.stats}
          />
        })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
