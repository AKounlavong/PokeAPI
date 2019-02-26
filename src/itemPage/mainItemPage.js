import React, { Component } from 'react';
import Navbar from '../navbar';
import axios from 'axios';

class MainItemPage extends Component {
    state = { 
        pokeData: [],
        offset: 0
     }

    componentDidMount = () => {
        this.fetchData();
    }

    fetchData = () => {
        axios.get(`https://pokeapi.co/api/v2/item/?limit=5&offset=${this.state.offset}`)
         .then(response =>{
             console.log(response);
             this.setState({
                 pokeData: response.data.results
             })
         });
    }
    
    nextClicked = () => {
        this.setState({
            offset: this.state.offset += 9
        })
        axios.get(`https://pokeapi.co/api/v2/item/?limit=5&offset=${this.state.offset}`)
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
        axios.get(`https://pokeapi.co/api/v2/item/?limit=5&offset=${this.state.offset}`)
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
                        <h2>Items</h2>
                        {this.state.pokeData && (
                            <div>
                                <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Cost</th>
                                        <th scope="col">Fling Effect</th>
                                        <th scope="col">Fling Power</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.pokeData.map((item, index) => {
                                        return(
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.cost}</td>
                                            {console.log(item)}
                                            <td>{item.fling_effect}</td>
                                            <td>{item.fling_power}</td>
                                        </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <button
                                classname="btn btn-primary"
                                onClick={this.nextClicked}
                                >Next</button>
                            <button
                                classname="btn btn-primary"
                                onClick={this.prevClicked}
                                >Previous</button>
                        </div>
                        )}
                    </div>
            </div>
         );
    }
}
 
export default MainItemPage;