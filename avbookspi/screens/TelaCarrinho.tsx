import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CardProduto from '../components/CardProduto/CardProduto';

export default function Cart({ navigation }) {
  // Exemplo de lista de produtos no carrinho
  const cartItems = [
    { id: '1', name: 'A arte da guerra', price: '29.99' },
    // Adicione mais itens conforme necessário
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header title="Carrinho" />

        {/* Adicionando a imagem abaixo do header */}
        <Image
          source={require('../assets/Livros/Livro2.png')}
          style={styles.headerImage}
        />

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>
            Total: ${cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2)}
          </Text>
        </View>
        <Button
          title="Finalizar Compra"
          onPress={() => {
            // Adicione aqui a lógica para finalizar a compra
            // Pode ser a navegação para uma tela de confirmação, por exemplo.
          }}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Alterado de 'row' para 'column'
    top: 0,
    right: 0,
    left: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  totalContainer: {
    marginVertical: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Estilo para a imagem abaixo do header
  headerImage: {
    width: 90, // Utiliza 100% da largura disponível
    height: 120, // Altura desejada para a imagem
    resizeMode: 'cover', // Pode ajustar conforme necessário
    marginBottom: 10, // Adiciona um espaçamento abaixo da imagem
  },
});