import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderCards = () => {
    return this.props.pokemon.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon}/>)
  }

  render() {
    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
          {this.renderCards()}
        </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
