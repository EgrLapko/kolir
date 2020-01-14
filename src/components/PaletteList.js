import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

import logo from '../images/logo.png';

export default class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return ( 
            <div className="palette-list">
                <div className="palette-container"> 
                    <nav className="palette-nav">
                        <div className="logo">
                            <img src={logo} alt="logo"/>
                        </div> 
                    </nav>
                    <div className="palettes">
                        {palettes.map(palette => (
                            <Link key={palette.id} to={`/palette/${palette.id}`}>
                                <MiniPalette {...palette} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            
        )
    }
}
