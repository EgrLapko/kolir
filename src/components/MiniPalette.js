import React from 'react'

export default function MiniPalette(props) {
    const { paletteName, colors } = props;

    const miniColorBoxes = colors.map(color => (
        <div className="mini-color" style={{backgroundColor: color.color}} key={color.name}/>
    ))

    return (
        <div className="mini-palette">
            <div className="colors">
                {miniColorBoxes}
            </div>
            <h5 className="title">{paletteName}</h5>
        </div>
    )
}
