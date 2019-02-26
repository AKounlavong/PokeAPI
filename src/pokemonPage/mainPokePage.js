import React, { Component } from 'react';
import axios from 'axios';

class MainPokePage extends Component {
    state = { 
        pokeData: [],
        clickedPoke: {},
        offset: 0
     }

    componentDidMount = () => {
        this.fetchData();
    }

    fetchData = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${this.state.offset}`)
        .then(response =>{
            console.log(response.data.results)
            this.setState({
                pokeData: response.data.results
            })
        });
    }

    nextClicked = () => {
        this.setState({
            offset: this.state.offset += 9
        })
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${this.state.offset}`)
            .then(response =>{
                this.setState({
                    pokeData: response.data.results
                })
            });
    }

    prevClicked = () => {
        this.setState({
            offset: this.state.offset -= 9
        })
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${this.state.offset}`)
            .then(response =>{
                this.setState({
                    pokeData: response.data.results
                })
            });
    }


    selectPokemon = (index) => {
        console.log(this.state.pokeData[index])
        this.setState({
            clickedPoke: this.state.pokeData[index]
        })
    }

    render() { 
        return ( 
            <div>
                <h1>Pokemon React</h1>
                <div>
                    <h2>Pokemon</h2>
                    <div className="row">
                        {this.state.pokeData.map((pokemon, index) => {
                            return(
                                <div className="col-md-4">
                                    <div key={index} 
                                         onClick={() => this.selectPokemon(index)} 
                                         >
                                        <img src={pokemon.front_default}
                                             alt='pokemon'
                                             />
                                        <p>{pokemon.name.toUpperCase()}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <div>
                            <h1>Selected Pokemon</h1>
                            <div>
                                <div>
                                    {this.state.clickedPoke.name &&
                                        <p>{this.state.clickedPoke.name.toUpperCase()}</p>
                                    }
                                    <p>{this.state.clickedPoke.abilities} </p>
                                    {this.state.clickedPoke.sprites && 
                                        <img src={this.state.clickedPoke.sprites.front_default} alt='clicked pokemon' />
                                    }
                                   
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => this.prevClicked()}
                                >Previous</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => this.nextClicked()}
                                >Next</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default MainPokePage;