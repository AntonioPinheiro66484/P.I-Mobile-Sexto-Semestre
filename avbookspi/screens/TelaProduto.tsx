import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CardProduto from '../components/CardProduto/CardProduto';

export default function TelaProduto() {
  return (
    <ScrollView>
      <Header navigation={undefined} />
      <View style={styles.container}>
        <View style={styles.fixedImageContainer}>
          <Image
            source={require('../assets/Livros/Livro1.png')}
            style={styles.produto}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.titulo}>A Arte da Guerra</Text>
          <Text>Preço: R$ 40,00</Text>
          <Text style={styles.texto}>
            A Arte da Guerra é uma obra-prima do pensamento militar. Sua
            importância transcendeu o tempo, tornando-se um clássico obrigatório,
            não só para militares, mas para todos que se interessam por
            estratégia, no ocidente e no oriente.
          </Text>
          <Button title="Comprar" onPress={() => console.log('Botão pressionado')} />
          {/* Divisória entre a descrição e a sugestão */}
          <View style={styles.divisor} />

          {/* Sugestão em negrito e maiúsculo */}
          <Text style={styles.sugestao}>SUGESTÃO</Text>
          <CardProduto name="Principe Maquiavel" price="59.99" />

          {/* Botão de compra */}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  fixedImageContainer: {
    top: 140,
    left: 0,
    right: 0,
    zIndex: 1,
    alignItems: 'center',
    padding: 16,
  },
  content: {
    marginTop: 147, // Adjust this value based on the height of your product image
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  texto: {
    textAlign: 'justify',
    marginBottom: 16,
  },
  sugestao: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  divisor: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
    marginVertical: 16,
  },
  produto: {
    width: 100,
    height: 147,
  },
});