import React, { Component } from 'react';
import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
         }
    }
    render() {
        const gifs = [
            { id: "xT9IgDEI1iZyb2wqo8"},
            { id: "4oMoIbIQrvCjm"},
            
        ];

        return (
            <div>
                <div className="left-scene">
                    <SearchBar />
                    <div className="selected-gif">
                        <Gif id="4oMoIbIQrvCjm"/>
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={gifs} />
                </div>
            </div>
         );
    }
}
 
export default App;