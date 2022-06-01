import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Header from '../../Components/Header';
import Others from '../../Styles/Others';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();


class Trabalhe extends Component {
    render() {
        const trabalho = require('../../Images/Trabalho.jpg');

        return (
            <View style={Others.container}>
                <ScrollView>
                    <Header></Header>
                    <Text style={{ fontSize: 35, marginTop: 30, marginLeft: 8, marginBottom: 23, textAlign: "left", color: "white", fontWeight: "bold" }}>Trabalhe Conosco</Text>
                    <Image
                        style={{ width: 425, height: 370, marginLeft: 8, marginBottom: 40 }}
                        source={trabalho}
                    />
                    <Text style={{ fontSize: 20, marginHorizontal: 30, marginBottom: 15, color: "white" }}>Confiança é a base do relacionamento, que ajuda a construir histórias e a fazer parte da vida das pessoas.Se você se identificou com a Livraria Knownledge&Learning e tem interesse em fazer parte da empresa, venha trabalhar conosco!</Text>

                    <Text style={{ fontSize: 35, marginTop: 30, marginLeft: 8, marginBottom: 23, textAlign: "left", color: "white", fontWeight: "bold" }}>Benefícios:</Text>
                    <Text style={{ fontSize: 20, marginHorizontal: 25, marginBottom: 15, color: "white" }}>- Plano de Carreira</Text>
                    <Text style={{ fontSize: 20, marginHorizontal: 25, marginBottom: 15, color: "white" }}>- Treinamento e capacitação dos funcionarios</Text>
                    <Text style={{ fontSize: 20, marginHorizontal: 25, marginBottom: 15, color: "white" }}>- Salário compatível com o mercado</Text>
                    <Text style={{ fontSize: 20, marginHorizontal: 25, marginBottom: 15, color: "white" }}>- Plano de saúde</Text>
                    <Text style={{ fontSize: 20, marginHorizontal: 25, marginBottom: 15, color: "white" }}>- Auxílio refeição</Text>
                    <Text style={{ fontSize: 20, marginHorizontal: 25, marginBottom: 15, color: "white" }}>- Vale transporte</Text>
                    <Text style={{ fontSize: 20, marginHorizontal: 25, marginBottom: 15, color: "white" }}>- Participação dos lucros e descontos livraria</Text>

                    <Text style={{ fontSize: 30, marginTop: 30, marginLeft: 8, marginBottom: 23, textAlign: "left", color: "white", fontWeight: "bold" }}>E-mail:</Text>
                    
                    <Icon name="email" style={{ marginHorizontal: 15, top: 10 }} size={34} color="#fff" />
                    <Text style={{ fontSize: 20, marginHorizontal: 25, marginBottom: 15, marginLeft: 57, bottom: 21, color: "white" }}>contato@livrariak&l.com.br</Text>


                </ScrollView>
            </View>
        )
    }
}

export default Trabalhe;