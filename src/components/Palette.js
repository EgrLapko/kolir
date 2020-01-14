import React, { Component } from 'react';

import { KolirConsumer } from '../context';
import ColorBox from './ColorBox';
import PopUp from './PopUp';
import Navbar from './Navbar';
import Footer from './Footer';


export default class Palette extends Component {
    state ={
        level: 500,
        format: "hex"
    }

    changeLevel = (newLevel) => {
        this.setState({
            level: newLevel
        })
    }

    changeFormat = (val) => {
        this.setState({ format: val })
    }

    render() {
        const { colors, paletteName, id } = this.props.palette;
        const { level, format } = this.state;

        const colorBoxes = colors[level].map(color => (
            <ColorBox 
                background={color[format]} 
                name={color.name} 
                key={color.id} 
                moreUrl={`/palette/${id}/${color.id}`}
                onSeeMore
            />
        ));

        return (
            <KolirConsumer>
                { value => {
                    const { copiedColor, isCopied } = value;

                    return (
                        <div className="palette">
                            <PopUp copiedColor={copiedColor} isCopied={isCopied} />
                            <Navbar 
                                level={level} 
                                changeLevel={this.changeLevel} 
                                handleChange={this.changeFormat} 
                                showSlider
                            />
                            <div className="palette-colors">
                                {colorBoxes}
                            </div>
                            <Footer paletteName={paletteName} />
                        </div>
                    )   
                }}
            </KolirConsumer>
        )
    }
}
