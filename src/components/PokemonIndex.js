import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => this.setState({
      pokemon: [...pokemon]
    }))
  }

  handleSearch = (event, { value }) => {
    this.setState({
      searchTerm: value
    })
  }

  addToPokemon = (pokemon) => {
    this.setState({
      pokemon: [pokemon, ...this.state.pokemon]
    })
  }

  pokemonToRender = () => {
    let pokemon = this.state.pokemon.filter(mon=>mon.name.includes(this.state.searchTerm))
    return pokemon
  }

  render() {
    console.log(this.state.searchTerm)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addToPokemon={this.addToPokemon}/>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.pokemonToRender()}/>
      </div>
    )
  }
}

export default PokemonPage
