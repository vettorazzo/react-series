import React from 'react';
import Time from './Time.js';
import Partida from './Partida.js';


export default class Placar extends React.Component {

render() {

 return (        
    <div>
        <div style={{float: "left", "marginRight":"20px"}}>
            <h3>Casa</h3>
            <Time/>
        </div>
        <div style={{float: "left", "marginRight":"20px"}}>
            <Partida/>
        </div>
        <div style={{float: "left", "marginRight":"20px"}}>
        <h3>Visitante</h3>
            <Time/>
        </div>
        <div style={{clar: "both"}}></div>
    </div>

);
}
}