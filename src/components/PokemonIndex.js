import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    name: ""
  }



  render() {

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm/>
        <br />
        <Search onSearchChange={event => {
            this.props.setNameQuery(event.target.value)
          }
          }/>
        <br />
        <PokemonCollection pokemon={this.props.pokemon}/>
      </div>
    )
  }
}

export default PokemonPage
