import React, { Component } from 'react';
import { View, Text, ScrollView, Alert, Image, Button } from 'react-native';
import Header from '../../Components/Header';
import body from '../../Styles/corpo';
import Others from '../../Styles/Others';

class produtos extends Component {
    render() {

        const localCodigoLimpo = require("../../Images/codigoLimpo.jpg");
        const localComoProgramarC = require("../../Images/comoProgramarC.jpg");
        const localAlgoritmoLogica = require("../../Images/algoritmosLogica.jpg");
        const localPadroesArquitetura = require("../../Images/padroesArquitetura.jpg");
        const localProgramadorPragmatco = require("../../Images/programadorPragmatico.jpg");
        const localReactNative = require("../../Images/reactNative.jpg");

        const codigoLimpo = () => {
            Alert.alert('Código Limpo', 'Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim. O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo: Habilidades Práticas do Agile Software. Martin se reuniou com seus colegas do Mentor Object para destilar suas melhores e mais ágeis práticas de limpar códigos "dinamicamente" em um livro que introduzirá gradualmente dentro de você os valores da habilidade de um profissional de softwares e lhe tornar um programador melhor –mas só se você praticar.')
        }
        const comoProgramarC = () => {
            Alert.alert('C - Como Programar', 'Desde a década de 1990, mais de um milhão de alunos e pro ssionais aprenderam programação e desenvolvimento de software com os livros da série “Como programar”, de Deitel®. C: como programar, 6a edição, apresenta três paradigmas atuais de programação: procedural em C, orientada a objeto e genérica em C++. O livro é apropriado para cursos de programação em C e C++ de níveis introdutório e intermediário.')
        }
        const algoritmosLogica = () => {
            Alert.alert('Algoritmos E Lógica Da Programação', 'Com linguagem simples e didática – sem, no entanto, fugir da complexidade do assunto –, o livro procura tornar prática a lógica de programação, além de mostrar aos estudantes um caminho mais adequado na construção dos algoritmos. O desenvolvimento do raciocínio lógico e da abstração de procedimentos e dados são as maiores dificuldades para os estudantes dos cursos introdutórios. Nesse sentido, os autores resolvem os problemas propostos passo a passo, apresentando todos os conceitos envolvidos por meio de fluxogramas e em conjunto com pseudocódigos.');
        }
        const padroesArquitetura = () => {
            Alert.alert('Padrões de Arquitetura de Aplicações Corporativas', 'Padrões de Arquitetura de Aplicações Corporativas. Uma resposta aos grandes desafios enfrentados pelos profissionais que trabalham com o desenvolvimento de aplicações corporativas. Fowler reuniu um grupo de colaboradores para resumir mais de 40 soluções recorrentes em aplicações.')
        }
        const programadorPragmatico = () => {
            Alert.alert('Programador Pragmatico', ' é um livro sobre programação de computadores e engenharia de software, escrito por Andrew Hunt e David Thomas e publicado em outubro de 1999. É usado como livro em cursos universitários relacionados.')
        }
        const reactNative = () => {
            Alert.alert('React Native Cookbook', 'Leve o desenvolvimento de seu aplicativo React Native para o próximo nível com esta grande coleção de receitas Sobre este livro • Crie experiências de usuário ricas e envolventes no React Native enquanto mantém o desempenho de aplicativo de pico • Aproveite o melhor do iOS e Android para o desenvolvimento do React Native enquanto maximiza a reutilização de código e coesão • Implemente padrões de arquitetura em seu aplicativo React Native que ofereça suporte a acesso, roteamento e teste de dados eficientes. Para quem este livro se destina Este livro é para desenvolvedores da web que estão familiarizados com React.js e conhecem os fundamentos do desenvolvimento de IU. Você pode ou não ter usado o React Native antes, mas é ideal para você se deseja desenvolver aplicativos nativos para iOS e Android usando o React Native. O conhecimento existente de JavaScript ES2015 é altamente recomendado.')
        }


        return (
            <View style={Others.container}>
                <ScrollView>
                <Header></Header>

                    <Text style={{ fontSize: 35, marginTop: 30, marginLeft: 8, marginBottom: 17, textAlign: "left", color: "white", fontWeight: "bold" }}>Produtos</Text>

                    <Image
                        style={Others.image}
                        source={localCodigoLimpo}
                    />
                    <Text style={body.descricao}>Código Limpo</Text>
                    <Text style={body.preco}>R$75,70</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={codigoLimpo}
                        />
                    </View>
                    <Image
                        style={Others.image}
                        source={localComoProgramarC}
                    />
                    <Text style={body.descricao}>Como Programar em C</Text>
                    <Text style={body.preco}>R$258,99</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={comoProgramarC}
                        />
                    </View>
                    <Image
                        style={Others.image}
                        source={localAlgoritmoLogica}
                    />
                    <Text style={body.descricao}>Algoritmos e Lógica de programação</Text>
                    <Text style={body.preco}>R$46,99</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={algoritmosLogica}
                        />
                    </View>
                    <Image
                        style={Others.image}
                        source={localPadroesArquitetura}
                    />
                    <Text style={body.descricao}>Padrões de Arquitetura de Aplicações Corporativas</Text>
                    <Text style={body.preco}>R$122,40</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={padroesArquitetura}
                        />
                    </View>
                    <Image
                        style={Others.image}
                        source={localProgramadorPragmatco}
                    />
                    <Text style={body.descricao}>Programador Pragmatico</Text>
                    <Text style={body.preco}>R$130,23</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={programadorPragmatico}
                        />
                    </View>
                    <Image
                        style={Others.image}
                        source={localReactNative}
                    />
                    <Text style={body.descricao}>React Native Cookbook</Text>
                    <Text style={body.preco}>R$452,25</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={reactNative}
                        />
                    </View>

                </ScrollView>
            </View>
        )
    }
}

export default produtos;