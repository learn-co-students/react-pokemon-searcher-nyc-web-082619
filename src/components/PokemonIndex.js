import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonIndex extends React.Component {

  state = {
    pokemon: [], 
    filter: ""
  }

  renderNewPokemon = (newPokemon) => {
    this.setState({
      pokemon: [...newPokemon]
    })
  }

  fetchPokemon = () => {
    let url = 'http://localhost:3000/pokemon'
    fetch(url)
    .then(response => response.json())
    .then(pokemon => this.setState({
      pokemon: [...pokemon]
    }))
  }

  componentDidMount() {
    return this.fetchPokemon()
  }

  handleSearch = () => {
    console.log(this.state.filter)
     this.setState({ 
       pokemon: this.state.pokemon.filter(pokemon => {return pokemon.name.includes(this.state.filter)})
     })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm renderNewPokemon={this.renderNewPokemon} />
        <br />
        <Search onSearchChange={(event) => {
           this.setState({
             filter: event.target.value
            }, this.handleSearch)}
         } showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} />
      </div>
    )
  }
}

export default PokemonIndex