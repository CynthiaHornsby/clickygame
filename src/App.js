import React, {Component} from "react";
import Images from "./components/Images";
import images from "./images.json";

const imageIds = [];

class App extends Component {
    
    state = {
        images,
        count: 0
    };
    
    
    shuffleImages = id => {
        
        var shuffle = require('shuffle-array');
        shuffle(images);

    };
        counter = id => {
        
        this.setState({ count: this.state.count +1 });
        
        //if( imageIds.length = 0){
            //this.setState({ count: 0 })
        //}

    };
    
    arrayPush = id => {
        

        
        console.log(imageIds);
        
    }

    

    
    render() {
        return (
            <div>
            <p>{this.state.count}</p>
                {this.state.images.map( images => (
                <Images
                    id={images.id}
                    key={images.id}
                    image={images.image}
                    counter={this.counter}
                    arrayPush={this.arrayPush}
                    shuffleImages={this.shuffleImages}
                    />
                    
                    
                ))}
            </div>
            );
    }
}

export default App;