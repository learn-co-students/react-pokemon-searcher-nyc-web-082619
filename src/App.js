import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'


class App extends React.Component {

  state = {
    pokemon: [],
    nameQuery: ""

  }

  render() {
    return (
        <div className="App">
          <PokemonIndex pokemon={this.filteredPokemon()} setNameQuery={this.setNameQuery}/>
        </div>
      )
  }

  setNameQuery= (input) => {
    this.setState({nameQuery:input })
    console.log(this.state.nameQuery)
    
  }

  filteredPokemon = () => {
    let pokemon = this.state.pokemon

    return pokemon.filter(pokemon =>{
      return pokemon.name.toLowerCase().includes(this.state.nameQuery)
      }
    )
  }



  componentDidMount () {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(data => {
      this.setState({pokemon: data})
      console.log(this.state)
    })
  }
}
export default App
