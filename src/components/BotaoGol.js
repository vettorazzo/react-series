import React from 'react';

export default class BotaoGol extends React.Component {
    handleClick(event){
        event.preventDefault();
        this.props.marcarGol();
    }
    render() {
        return (
            <buttton onClick={this.handleClick.bind(this)}>Gol!</buttton>
        );
    }
}
