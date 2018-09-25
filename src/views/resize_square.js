import React, { Component } from 'react';
import { ResizableBox } from 'react-resizable';

export default class ResizeSquare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 100,
            height: 100,
        }
    }

    onResize = (event, {element, size}) => {
        this.setState({width: size.width, height: size.height});
    };

    render () {
        return ( 
            <ResizableBox 
                className="box" 
                width={this.state.width} 
                height={this.state.height} 
                axis="both"
                minConstraints={[100, 100]} 
                maxConstraints={[400, 400]}
            >
                
            <span>
                Happy Strong Fun Lucky Clever
            </span>
                
            </ResizableBox>
        )
    }
}