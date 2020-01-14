import React from 'react';

const PopUp = ({ isCopied, copiedColor }) => {
    return (
        <div className={`pop-up ${isCopied ? "active" : ""}`} style={{backgroundColor: copiedColor}}>
            <p className="pop-up-text">Copied! {copiedColor}</p>
        </div>
    )
}

export default PopUp;
