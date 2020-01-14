import React, { Component } from 'react';

const KolirContext = React.createContext();

class KolirProvider extends Component {

    state = {
        isCopied: false,
        copiedColor: ''
    }

    changeCopyState = () => {
        this.setState({ isCopied: true }, () => {
            setTimeout(() => this.setState({ isCopied: false }), 1500);
        })
    }

    setBackgroundState = (color) => {
        this.setState({
            copiedColor: color
        })
    }

    render() {
        return (
            <KolirContext.Provider 
                value = {{
                    ...this.state,
                    changeCopyState: this.changeCopyState,
                    setBackgroundState: this.setBackgroundState
                }}
            >
                {this.props.children}
            </KolirContext.Provider>
        )
    }
};

const KolirConsumer = KolirContext.Consumer;

export { KolirProvider, KolirConsumer };
