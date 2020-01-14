import React from 'react'

export default function Footer({ paletteName }) {
    return (
        <footer className="footer">
            <div className="palette-info">
                {paletteName}
            </div> 
        </footer>
    )
}
