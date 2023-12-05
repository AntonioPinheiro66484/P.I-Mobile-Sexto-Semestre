import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import TelaProduto from './screens/TelaProduto';
import TelaBusca from './screens/TelaBusca';
import TelaLogin from './screens/TelaLogin';
import TelaCadastro from './screens/TelaCadastro';
import TelaCarrinho from './screens/TelaCarrinho'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TelaCarrinho" component={TelaCarrinho} />
        <Stack.Screen name="TelaProduto" component={TelaProduto} />
        <Stack.Screen name="TelaBusca" component={TelaBusca} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
