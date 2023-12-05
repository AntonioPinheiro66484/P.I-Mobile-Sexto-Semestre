import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const Header = ({navigation}) => {

  const handleBuscaPress = () => {
    // Navegue para a página de cadastro
    navigation.navigate('TelaBusca');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')} // Substitua pelo caminho da sua imagem de logo
        style={styles.logo}
      />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Buscar"
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={handleBuscaPress} style={styles.searchButton}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6b0ee2',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },

  input: {
    flex: 1,
    color: '#333',
  },

  logo: {
    width: 48,
    height: 48,
  },
  searchBar: {
    flex: 1,
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingLeft: 12,
  },
  searchButton: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: '#4caf50', // Cor do botão de pesquisa
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  },
});

export default Header;