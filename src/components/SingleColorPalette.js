import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { KolirConsumer } from '../context';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import PopUp from './PopUp';

export default class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = {
            format: "hex"
        }
    }
    
    gatherShades = (palette, colorToFilterBy) => {
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        return shades.slice(1);
    } 

    changeFormat = (val) => {
        this.setState({ format: val })
    }
    
    render() {
        const { format } = this.state;
        const { paletteName, id } = this.props.palette;
        
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.name} name={color.name} background={color[format]} />
        ));
        return (
            <KolirConsumer>
                { 
                    value => {
                        const { copiedColor, isCopied } = value;
                        return (
                            <div className="single-color-palette">
                                <Navbar handleChange={this.changeFormat} />
                                <PopUp copiedColor={copiedColor} isCopied={isCopied} />
                                <div className="single-color-boxes">
                                    {
                                        colorBoxes
                                    }
                                </div>
                                <Link to={`/palette/${id}`}>
                                    <button className="btn btn-back">
                                        Go Back
                                    </button>
                                </Link>
                                <Footer paletteName={paletteName} />
                            </div>
                        )
                    }
                }
            </KolirConsumer>
        )
    }
}
