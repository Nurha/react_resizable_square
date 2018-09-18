import React, { Component } from 'react';
import { ResizableBox } from 'react-resizable';

export default class ResizeSquare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 200,
            height: 200,
        }
    }

    onResize = (event, {element, size}) => {
        this.setState({width: size.width, height: size.height});
    };

    render () {
        return (
            <div> 
                <ResizableBox 
                    className="box" 
                    width={this.state.width} 
                    height={this.state.height} 
                    axis="both"
                    minConstraints={[100, 100]} 
                    maxConstraints={[500, 500]}
                >
                    <span className="text">Resizable ("both" axis).</span>
                </ResizableBox>
            </div>
        )
    }
}