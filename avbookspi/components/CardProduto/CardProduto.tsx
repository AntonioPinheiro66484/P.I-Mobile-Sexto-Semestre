import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookCard = ({ name, price }) => {
   const navigation = useNavigation();

  const handleVerMais = () => {
    // Navegar para a tela TelaProduto
    navigation.navigate('TelaProduto', { nomeDoLivro: name, precoDoLivro: price });
  };
  return (
    <TouchableOpacity style={styles.card}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>R$ {price}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVerMais}>
        <Text style={styles.buttonText}>Ver Mais</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {

    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    backgroundColor: '#6b0ee2',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default BookCard;
