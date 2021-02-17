import React from 'react';
import BotaoGol from './BotaoGol';

export default class Time extends React.Component {
  render() {
    return (
      <div>
        <h1>NomeTime</h1>
        <h2># Gols</h2>
        <BotaoGol/>
      </div>  
    );
  }
}