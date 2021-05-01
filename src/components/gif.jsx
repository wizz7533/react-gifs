import React, { Component } from 'react';

class Gif extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const src = "https://media0.giphy.com/media/4oMoIbIQrvCjm/giphy.gif";
        return (
            <img src={src} alt="Bart_Simson_Dance" className="gif"/>
         );
    }
}
 
export default Gif;