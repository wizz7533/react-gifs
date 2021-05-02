import React, { Component } from 'react';
import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';
import giphy from 'giphy-api';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
            selectedGifId: null//"xT9IgDEI1iZyb2wqo8"
        };
        
        // this.search = this.search.bind(this);
        // this.selectGif = this.selectGif.bind(this);
        
    }

    selectGif(id) {
        this.setState({ selectedGifId: id });
    }

    search = (query) => {
        giphy('k1IRQ4mNpwwreFhexp5hjPJk68PazuH9').search({
            q: query,
            rating: 'g',
            limit: 10
        }, (error, result) => {
            this.setState({gifs: result.data})
        });
    }
    
    render() {
        const gifs = [
            { id: "xT9IgDEI1iZyb2wqo8"},
            { id: "4oMoIbIQrvCjm"},
            
        ];

        return (
            <div>
                <div className="left-scene">
                    <SearchBar searchFunction={this.search}/>
                    <div className="selected-gif">
                        <Gif id={this.state.selectedGifId}/>
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={this.state.gifs} />
                </div>
            </div>
         );
    }
}
 
export default App;