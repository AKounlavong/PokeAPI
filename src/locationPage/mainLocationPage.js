import React, { Component } from 'react';
import Navbar from '../navbar';
import axios from 'axios';

class MainLocationPage extends Component {
    state = { 
        pokeData: [],
        offset: 0
     }

    componentDidMount = () => {
        this.fetchData();
    }

    fetchData = () => {
        axios.get(`https://pokeapi.co/api/v2/location/?limit=3&offset=${this.state.offset}`)
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
        axios.get(`https://pokeapi.co/api/v2/location/?limit=3&offset=${this.state.offset}`)
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
        axios.get(`https://pokeapi.co/api/v2/location/?limit=3&offset=${this.state.offset}`)
            .then(response =>{
                this.setState({
                    pokeData: response.data.results
                })
            });
    }
    render() { 
        return ( 
            <div>
                {/* <Navbar /> */}
                <h1>Pokemon React</h1>
                    <div>
                        <h2>Location</h2>
                        <div>
                        {this.state.pokeData && (
                            this.state.pokeData.map((location, index) => {
                                return(
                                    <div key={index}>
                                       <h3>Name {location.name}</h3>
                                        <p>Region: {location.region}</p>
                                        <p>Areas:</p>
                                        {/* <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Url</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {location.areas.map((area, index) => (
                                                    <tr key={index}>
                                                        <td>{area.name}</td>
                                                        <td>{area.url}</td>
                                                    </tr>

                                                ))}
                                            </tbody>
                                        </table> */}
                                    </div>
                                )
                            })
                        )}
                        </div>
                    </div>
            </div>
         );
    }
}
 
export default MainLocationPage;