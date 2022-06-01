import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'



Icon.loadFont();

import Home from './src/Pages/Home/Home';
import sobre from './src/Pages/Sobre/Sobre';
import Trabalhe from './src/Pages/Trabalhe/Trabalhe';
import produtos from './src/Pages/Produtos/Produtos';
import reserva from './src/Pages/Reserva/Reserva';



const Tab = createBottomTabNavigator();

const icons = {
    Home: {
      name: 'ios-home'
    },
    Produtos: {
      name: 'ios-library'
    },
    Sobre: {
      name: 'ios-people'
    },
    Trabalhe: {
      name: 'ios-folder'
    },
    Reserva: {
      name: 'ios-book'
    }
  };


function App() {
  
    return (
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={ ({route}) => ({
             tabBarIcon: ({ color, size }) => {
               const { name } = icons[route.name];
               return <Icon name={name} color={color} size={size} />
              }
            })  }
              tabBarOptions={{
                activeTintColor: '#000',
                inactiveTintColor: 'gray',
              }} 
            >
          
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Sobre" component={sobre} />
          <Tab.Screen name="Trabalhe" component={Trabalhe} />
          <Tab.Screen name="Produtos" component={produtos} />
          <Tab.Screen name="Reserva" component={reserva} />
          
        </Tab.Navigator>
      </NavigationContainer>
    );
}

export default App;