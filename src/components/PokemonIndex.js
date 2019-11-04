import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state={
    value: "",
    newPoke: {},
    pokemonList: []
  }

  handleSearch =  (e) => {
    this.setState({
      value: e.target.value
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemonList: data
      })
    })
  }

  filterByInput = () => {
    return this.state.pokemonList.filter(pokemon => {
     return pokemon.name.includes(this.state.value)
   })
 }

  // applyFilter = (term) => {
  //   this.setState({
  //     value: term
  //   })
  // }

  addPokemon = (newPoke) => {
    this.setState({
      pokemonList: [
        ...this.state.pokemonList,
        newPoke
      ]})
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        {/* <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} /> */}
        <br />
        <PokemonCollection input={this.filterByInput()} newPoke = {this.state.newPoke}/>
      </div>
    )
  }
}

export default PokemonPage
