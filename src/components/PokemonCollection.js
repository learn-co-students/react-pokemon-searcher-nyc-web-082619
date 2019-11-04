import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  
  renderPokemon = () => {
    return this.props.input.map((pokemon) => {
      return <PokemonCard pokemon={pokemon} key={pokemon.name}/>
    })
  }


  
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
