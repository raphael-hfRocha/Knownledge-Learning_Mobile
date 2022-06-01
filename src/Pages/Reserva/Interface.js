import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import Header from '../../Components/Header';
import form from '../../Styles/form';
import Others from '../../Styles/Others'



class Interface extends Component {


    render() {
        return (
            <View style={Others.container}>
                <ScrollView>
                    <Header></Header>
                    <View style={{ marginHorizontal: 25, marginTop: 17 }}>

                        <Text style={form.texts}>Nome: </Text>
                        <TextInput placeholder="Informe seu nome" style={form.inputs} onChangeText={(nomeDigitado) => this.setState({ nome: nomeDigitado })} />
                        <Text></Text>

                        <Text style={form.texts}>Idade: </Text>
                        <TextInput placeholder="Informe sua idade" keyboardType="numeric" style={form.inputs} onChangeText={(idadeDigitada) => this.setState({ idade: idadeDigitada })} />
                        <Text></Text>

                        <Text style={form.texts}>Endereço: </Text>
                        <TextInput placeholder="Informe seu endereço" style={form.inputs} onChangeText={(enderecoDigitado) => this.setState({ endereco: enderecoDigitado })} />
                        <Text></Text>

                        <Text style={form.texts}>Livro: </Text>
                        <TextInput placeholder="Informe o livro" style={form.inputs} onChangeText={(livroDigitado) => this.setState({ livro: livroDigitado })} />
                        <Text></Text>

                        <Text style={form.texts}>Preço: </Text>
                        <TextInput placeholder="Informe o preço do livro" keyboardType="numeric" style={form.inputs} onChangeText={(precoDigitado) => this.setState({ preco: precoDigitado })} />
                        <Text></Text>

                    </View>
                </ScrollView>


            </View>
        );
    }
}
export default Interface;