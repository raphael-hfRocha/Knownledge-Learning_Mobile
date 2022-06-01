import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Header from '../../Components/Header.js';

class sobre extends Component {
    render() {

        const sobre = require('../../Images/sobrenos.jpg');

        return (
            <View style={{ backgroundColor: "black" }}>
                <ScrollView>
                    <Header></Header>
                    <Text style={{ fontSize: 35, marginTop: 30, marginLeft: 8, marginBottom: 23, textAlign: "left", color: "white", fontWeight: "bold" }}>Sobre Nós</Text>
                    <Image 
                        style={{ width: 425, height: 370, marginLeft: 8, marginBottom: 40 }}
                        source={sobre}
                    />
                    <Text style={{ fontSize: 20, marginHorizontal: 30, marginBottom: 15, color: "white" }}>Uma história de sucesso que se inicia com o sonho de Marta Schultz: construir uma livraria para promover o encontro de pessoas com os mais variados interesses. E foi em busca desse sonho que, há 70 anos, Dona Marta fundou a Livraria Knownledge&Learning. A empresa teve um início tímido na casa da família Schultz e, atualmente, é referência nacional com 14 lojas distribuídas pelo Brasil (em São Paulo, Campinas, Ribeirão Preto, Brasília, Salvador, Recife, Fortaleza, Curitiba e Porto Alegre).</Text>
                    <Text style={{ fontSize: 20, marginHorizontal: 30, marginBottom: 15, color: "white" }}>A Livraria Knownledge&Learning se dedica a oferecer um espaço multimídia, onde a busca pelo produto é apenas o início de uma jornada enriquecedora: nossas lojas dão vida à cultura por meio de seu extenso acervo e também de seus teatros, auditórios, cafés e eventos gratuitos. Venha nos conhecer!</Text>

                </ScrollView>
            </View>
        )
    }
}


export default sobre;