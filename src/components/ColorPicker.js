import React, { Component } from 'react'
import {CirclePicker} from 'react-color'
class ColorPicker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             background:'#fff',
        }
    }
    
    
      handleChangeComplete = (color, event) => {
        this.setState({ background: color.hex });
      };
    render() {
        return (
            <div>
                <CirclePicker></CirclePicker>
            </div>
        )
    }
}

export default ColorPicker
