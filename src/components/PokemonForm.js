import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        hp: this.state.hp,
        frontUrl: this.state.frontUrl,
        backUrl: this.state.backUrl
      })
    })
    .then(response => response.json())
    .then(newPokemon => this.props.renderNewPokemon(newPokemon))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.currentTarget.value
    })
  }

  
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              fluid value="Name" 
              label="Name" 
              placeholder="Name" 
              name="name" 
              onChange={this.handleChange}
              value={this.state.name}
            />
            <Form.Input 
              fluid label="hp" 
              placeholder="hp" 
              name="hp" 
              onChange={this.handleChange}
              value={this.state.hp}
            />
            <Form.Input 
              fluid label="Front Image URL" 
              placeholder="url" 
              name="frontUrl"
              onChange={this.handleChange} 
              value={this.state.frontUrl}
            />
            <Form.Input 
              fluid label="Back Image URL" 
              placeholder="url" 
              name="backUrl" 
              onChange={this.handleChange}
              value={this.state.backUrl}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
