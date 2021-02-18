import React from 'react';

import Placar from './Placar';

const dados = {

    partida: {
        estadio: "Maracanâ/RJ",
        data: "01/06/2016",
        hora: "19h",
    },
    casa: {
        nome: "Vasco",
    },
    visitante: {
        nome: "Flamengo"
    }
}

export default class App extends React.Component {
    render(){
        return (
            <Placar {...dados} />
        );
    }
}
