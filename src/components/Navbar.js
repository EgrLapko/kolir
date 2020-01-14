import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link } from 'react-router-dom';


import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import logo from '../images/logo.png';

export default class Navbar extends Component {
    state = {
        format: "hex"
    }

    handleChange = (e) => {
        this.setState({ format: e.target.value });
        this.props.handleChange(e.target.value);
    }

    render() {
        const { level, changeLevel, showSlider } = this.props;
        const { format } = this.state;
        return (
            <nav className="navbar">
                <div className="left-side">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="logo"/></Link>
                    </div>
                    {
                        showSlider &&
                        <div className="slider-container">
                            <div className="slider">
                                <span className="level">Level: {level}</span>
                                <Slider
                                    defaultValue={level}
                                    min={100}
                                    max={900}
                                    step={100}
                                    onAfterChange={changeLevel}
                                />
                            </div>
                        </div>
                    } 
                </div>
                <div className="right-side">
                    <div className="select-container">
                        <Select value={format} onChange={this.handleChange}>
                            <MenuItem value="hex">HEX - #ffffff</MenuItem>
                            <MenuItem value="rgb">RGB - (255, 255, 255)</MenuItem>
                            <MenuItem value="rgba">RGBA - (255, 255, 255, 1.0)</MenuItem>
                        </Select>
                    </div>
                </div>   
            </nav>
        )
    }
}
