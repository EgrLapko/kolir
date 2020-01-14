import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

import { KolirConsumer } from '../context';

export default class ColorBox extends Component {
    render() {
        const { background, name, moreUrl, onSeeMore } = this.props;
        const darkColor = chroma(background).luminance() <= 0.08;
        const lightColor = chroma(background).luminance() >= 0.08;
        return (
            <KolirConsumer>
                { value => {
                    const { changeCopyState, setBackgroundState } = value;

                    return (
                        <CopyToClipboard 
                            text={background} 
                            onCopy={() => {changeCopyState(); setBackgroundState(background)}}
                        >
                            <div style={{ background }} className="color-box">
                                <div className="copy-container">
                                    <div className={`box-content ${darkColor && "light-text"}`}>
                                        <span> {name} </span>
                                    </div>
                                    <button className="btn copy-btn">Copy</button>
                                    {
                                        onSeeMore && 
                                        <button className={`see-more ${lightColor && "dark-text"}`}>
                                            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                                                More
                                            </Link>
                                        </button>
                                    }
                                    
                                </div>    
                            </div>
                        </CopyToClipboard>
                    )
                }}
            </KolirConsumer>
            
            
        )
    }
}
