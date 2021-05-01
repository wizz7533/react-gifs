import React, { Component } from 'react';
import Gif from './gif';
import SearchBar from './search_bar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div className="left-scene">
                    <SearchBar />
                    <div className="selected-gif">
                        <Gif/>
                    </div>
                </div>
                <div className="right-scene"></div>
            </div>
         );
    }
}
 
export default App;