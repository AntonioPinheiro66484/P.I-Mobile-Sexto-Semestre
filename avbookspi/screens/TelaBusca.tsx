import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const PesquisaScreen = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

  // Simulação de dados dos livros
  const livros = [
    { nome: 'Arte da Guerra', preco: 'R$ 29,90' },
    { nome: 'Cemiterio Maldito', preco: 'R$ 19,99' },
    { nome: 'V de Vingança', preco: 'R$ 24,99' },
    { nome: 'O Menino de Pijama Listrado', preco: 'R$ 39,90' },
    { nome: 'O Diario Perdido de Gravity Falls', preco: 'R$ 16,99' },
    { nome: 'Jogos Vorazes', preco: 'R$ 27,50' },
  ];

  // Filtra os livros com base na categoria selecionada
  const livrosFiltrados = categoriaSelecionada
    ? livros.filter((livro) => livro.categoria === categoriaSelecionada)
    : livros;
  return (
    <View style={styles.container}>
    <Header/>
      <View style={styles.content}>
        <View style={styles.filterBar}>
          <TouchableOpacity
            style={[styles.filterItem, categoriaSelecionada === 'fantasia' && styles.filterItemSelected]}
            onPress={() => setCategoriaSelecionada('fantasia')}
          >
            <Text style={[styles.filterText, categoriaSelecionada === 'fantasia' && styles.filterTextSelected]}>Fantasia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterItem, categoriaSelecionada === 'terror' && styles.filterItemSelected]}
            onPress={() => setCategoriaSelecionada('terror')}
          >
            <Text style={[styles.filterText, categoriaSelecionada === 'terror' && styles.filterTextSelected]}>Terror</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterItem, categoriaSelecionada === 'romance' && styles.filterItemSelected]}
            onPress={() => setCategoriaSelecionada('romance')}
          >
            <Text style={[styles.filterText, categoriaSelecionada === 'romance' && styles.filterTextSelected]}>Romance</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.livrosContainer}>
          {livrosFiltrados.map((livro, index) => (
            <View key={index} style={styles.livroItem}>
              <Text style={styles.livroNome}>{livro.nome}</Text>
              <Text style={styles.livroPreco}>{livro.preco}</Text>
            <TouchableOpacity style={styles.verMaisButton}>
              <Text style={styles.verMaisButtonText}>Ver Mais</Text>
            </TouchableOpacity>
            
            </View>
          ))}
        </View>
        <Footer/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    top:0,
    right:0,
    left:0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 80,
  },
  filterItem: {
    paddingHorizontal: 16,
  },
  filterItemSelected: {
    borderBottomWidth: 2,
    borderBottomColor: '#4c3d5f',
  },
  filterText: {
    color: '#4c3d5f',
    fontWeight: 'bold',
    fontSize: 16,
  },
  filterTextSelected: {
    color: '#4c3d5f',
  },
  livrosContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom:40,
  },
  livroItem: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#4c3d5f',
    padding: 16,
    marginBottom: 16,
  },
  livroNome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  livroPreco: {
    fontSize: 14,
    color: '#4c3d5f',
  },
    verMaisButton: {
    backgroundColor: '#f5f76e',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    borderColor:"#4c3d5f",
    borderWidth: 1,
  },
 
  verMaisButtonText: {
    color: '#6b0ee2',
    fontWeight: 'bold',
  },
});


export default PesquisaScreen;
