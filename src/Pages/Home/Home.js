import React, { Component } from 'react';
import { View, Image, Text, Button, ScrollView, Alert } from 'react-native';
import Header from '../../Components/Header.js';
import body from '../../Styles/corpo';
import Others from '../../Styles/Others';


class Home extends Component {
    
    render() {

        const local1001Invencoes = require('../../Images/1001-invencoes.jpg')
        const localPaiRicoPaiPobre = require('../../Images/paiRico_paiPobre.jpg');
        const localQuemPensaEnriquece = require('../../Images/quempensa_enriquece.jpg');
        const localRapidoDevagar = require('../../Images/rapidoedevagar.jpg');
        const localTalentoLiderar = require('../../Images/talento_liderar.jpg');

        const mileumaInvencoes =()=>{
            Alert.alert('As 1001 Invenções', 'Em 1001 invenções que mudaram o mundo, você vai descobrir detalhes curiosos sobre algumas das mais importantes invenções de todos os tempos, desde aquelas que ajudaram o homem a evoluir até as que simplesmente tornaram a vida mais prática. Da roda ao MP3, das ferramentas de pedra ao avião, este livro explora a história por trás de cada invento e traça o caminho desde sua concepção até os mais recentes aprimoramentos. Escrito por uma equipe de historiadores, cientistas, designers e antropólogos, este guia vai agradar tanto às pessoas que desejam aprender sobre o desenvolvimento da ciência e da tecnologia quanto aos curiosos que adoram saber detalhes divertidos sobre o mundo que os cerca.')
        }
        const PaiRicoPaiPobre =()=>{
            Alert.alert('Pai Rico Pai Pobre', 'Celebrando 20 anos como o livro n° 1 em finanças pessoais. A escola prepara as crianças para o mundo real? Essa é a primeira pergunta com a qual o leitor se depara neste livro. O recado é ousado e direto: boa formação e notas altas não bastam para assegurar o sucesso de alguém. O mundo mudou; a maioria dos jovens tem cartão de crédito, antes mesmo de concluir os estudos, e nunca teve aula sobre dinheiro, investimentos, juros etc. Ou seja, eles vão para a escola, mas continuam financeiramente improficientes, despreparados para enfrentar um mundo que valoriza mais as despesas do que a poupança. Para o autor, o conselho mais perigoso que se pode dar a um jovem nos dias de hoje é: Vá para a escola, tire notas altas e depoisprocure um trabalho seguro. O fato é que agora as regras são outras, e não existe mais emprego garantido para ninguém. Pai Rico, Pai Pobre demonstra que a questão não é ser empregado ou empregador, mas ter o controle do próprio destino ou delegá-lo a alguém. É essa a tese de Robert Kiyosaki neste livro substancial e visionário. Para ele, a formação proporcionada pelo sistema educacional não prepara os jovens para o mundo que encontrarão depois de formados. E como os pais podem ensinar aos filhos o que a escola relega? Essa é outra das muitas perguntas que o leitor encontra em Pai Rico, Pai Pobre. Nesse sentido, a proposta do autor é facilitar a tarefa dos pais. Quem entende de contabilidade deve esquecer seus conhecimentos acadêmicos, pois muitas das teorias expostas por Robert Kiyosaki contrariam os princípios contábeis comumente aceitos, e apresentam uma valiosa e moderna percepção do modo como se realizam os investimentos. A sociedade sofre mudanças radicais e, talvez, de proporções maiores do que as ocorridas em séculos passados. Não existe bola de cristal, mas algo é certo: a perspectiva global de transformações transcende nossa realidade imediata. Aconteça o que acontecer, só existem duas alternativas: segurança ou independência financeira. E o objetivo de Pai Rico, Pai Pobre é instruir o leitor e despertar sua inteligência financeira e a de seus filhos. “A principal razão pela qual as pessoas têm problemas financeiros é que passaram anos na escola, mas não aprenderam nada sobre dinheiro. O resultado é que elas aprendem a trabalhar por dinheiro… mas nunca a fazê-lo trabalhar para elas.” — Robert Kiyosaki')
        }
        const QuemPensaEnriquece =()=>{
            Alert.alert('Quem Pensa Enriquece', 'O 9º livro mais vendido de todos os tempos, que influencia líderes e empreededores em todo o mundo, agora em uma edição especial atualizada para o século XXI. O clássico best-seller sobre o sucesso agora anotado e acrescido de exemplos modernos, comprovando que a filosofia da realização pessoal de Napoleon Hill permanece atual e ainda orienta aqueles que são bem-sucedidos. Um livro que vai mudar não só o que você pensa, vai mudar o modo como você pensa.')
        }
        const RapidoDevagar =()=>{
            Alert.alert('Rapido e Devagar', 'Em Rápido e devagar: duas formas de pensar, Daniel Kahneman nos leva a uma viagem pela mente humana e explica as duas formas de pensar: uma é rápida, intuitiva e emocional; a outra, mais lenta, deliberativa e lógica. Kahneman expõe as capacidades extraordinárias - e também os defeitos e vícios - do pensamento rápido e revela a influência das impressões intuitivas nas nossas decisões. Comportamentos tais como a aversão à perda, o excesso de confiança no momento de escolhas estratégicas, a dificuldade de prever o que vai nos fazer felizes no futuro e os desafios de identificar corretamente os riscos no trabalho e em casa só podem ser compreendidos se soubermos como as duas formas de pensar moldam nossos julgamentos. As questões colocadas por Kahneman se revelam muitas vezes inquietantes: é verdade que o sucesso de um investidor é compconstamente aleatório e que sua habilidade no mercado financeiro é apenas uma ilusão? Por que o medo de perder é mais forte do que o prazer de ganhar? Kahneman revela quando podemos ou não confiar em nossa intuição. Oferece insights práticos e esclarecedores sobre como tomamos decisões nos negócios e na vida pessoal, e como podemos usar diferentes técnicas para nos proteger contra falhas mentais que muitas vezes nos colocam em apuros.')
        }
        const TalentoLiderar =()=>{
            Alert.alert('O Talento para Liderar', 'Que qualidades tornam um líder bem-sucedido nos negócios ou na política? Vivemos um período em que a revolução da informação mudou drasticamente o mercado de trabalho. A antiga organização hierárquica das empresas está sendo substituída por redes de contatos profissionais, a atuação dos líderes é constantemente questionada e as ideias sobre liderança claramente necessitam de uma redefinição. Na obra O talento para liderar, Joseph S. Nye Jr. aborda de maneira abrangente a natureza da liderança na atualidade, reunindo História, estudos de casos empresariais e pesquisas psicológicas. Atualmente, muitas pessoas acreditam que as formas mais coercivas de liderança foram amplamente substituídas nas sociedades pós-industriais por abordagens que visam atrair e inspirar em vez de ordenar. Contudo, Nye argumenta que os líderes mais eficazes são, na verdade, aqueles que combinam as capacidades ligadas à autoridade e à persuasão em proporções que variam em diferentes situações. A partir de exemplos de carreiras de líderes tão incomparáveis quanto Gandhi e Franklin D. Roosevelt, entre outros, Joseph S. Nye Jr. utiliza o conceito do "Poder Inteligente" para analisar tipos e habilidades de liderança, necessidades e exigências dos seguidores e a natureza da boa ou má atuação do líder em termos de ética e eficácia. O talento para liderar nos ajuda a compreender ambientes inconstantes, aproveitar as tendências e usar o fluxo dos acontecimentos para implementar estratégias em qualquer contexto de atuação.')
        }

        return(

            <View style={Others.container}>
                

                <ScrollView>
                 <Header></Header>

                    <Text style={{ fontSize: 35, marginTop: 30, marginLeft: 8, marginBottom: 17, textAlign: "left", color: "white", fontWeight: "bold" }}>Em Destaque</Text>
                    <Image
                        style={Others.image}
                        source={local1001Invencoes} />
                     <Text style={body.descricao}>As 1001 Invenções</Text>
                    <Text style={body.preco}>R$80,91</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={mileumaInvencoes} />
                    </View>
                    <Image
                        style={Others.image}
                        source={localPaiRicoPaiPobre} />
                    <Text style={body.descricao}>Pai Rico Pai Pobre</Text>
                    <Text style={body.preco}>R$79,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={PaiRicoPaiPobre} />
                    </View>
                    <Image
                        style={Others.image}
                        source={localQuemPensaEnriquece} />
                    <Text style={body.descricao}>Quem Pensa Enriquece</Text>
                    <Text style={body.preco}>R$79,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={QuemPensaEnriquece} />
                    </View>
                    <Image
                        style={Others.image}
                        source={localRapidoDevagar} />
                    <Text style={body.descricao}>Rapido e Devagar</Text>
                    <Text style={body.preco}>R$150,00</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={RapidoDevagar} />
                    </View>
                    <Image
                        style={Others.image}
                        source={localTalentoLiderar} />
                    <Text style={body.descricao}>O Talento para liderar</Text>
                    <Text style={body.preco}>R$32,99</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={TalentoLiderar} />
                    </View>
                </ScrollView> 
            
            </View>
        )
    }
}

export default Home;