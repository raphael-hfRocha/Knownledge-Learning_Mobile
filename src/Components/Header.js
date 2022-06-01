import React, { Component } from 'react';
import { View, Image } from 'react-native';
import header from '../Styles/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();


class Header extends Component {

    render() {

        const localLogo = require('../Images/logo_home.png');

        return (
            <View style={header.barra}>
                <Image
                    style={{ width: 160, height: 65, marginTop: 10, marginLeft: 125, alignItems: "center" }}
                    source={localLogo} />
                <Icon name="menu" style={{ bottom: 60, marginLeft: 5 }} size={55} color="black" />

            </View>
        )
    }
}

export default Header;