import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icon } from '@iconify/react';
import { useNavigation } from '@react-navigation/native';  // Adicione esta linha

const TelaCadastro = () => {
  const navigation = useNavigation();

  const handleCadastroPress = () => {
    // Navegue para a página de cadastro
    navigation.navigate('TelaCadastro');
  };
    const handleHomePress = () => {
    // Navegue para a página de cadastro
    navigation.navigate('Home'); // Alterado para 'Home' ao invés de 'TelaCadastro'
  };

  return (
    <View style={styles.container}>
       <View style={styles.logo}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
            />
        </View>
      <Text style={styles.title}>A. V. Books</Text>
      <Text style={styles.subtitle}>Faça login e começe a ler</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="johndoe@example.com" />
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} placeholder="**************" secureTextEntry={true} />
        <View style={styles.checkboxContainer}>
          <View style={styles.lembrarContainer}>
            <TouchableOpacity style={styles.checkbox}>
              <Icon icon="mingcute:check-fill" color="#e9ed37" />
            </TouchableOpacity>
            <Text style={styles.checkboxText}>Lembrar senha</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleHomePress}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCadastroPress}>
            <Text style={styles.texto}>Não tem cadastro? Crie uma conta agora!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b0ee2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
    subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#e9ed37',
    marginBottom: 16,
  },
    texto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#e9ed37',
    marginBottom: 0,
    marginTop: 8,
    textDecorationLine:'underline',
  },
  logo: {
    width: 72,
    height: 72,
  },
  
  form: {
    alignItems:"center",
    backgroundColor: '#6b0ee2',

  },
    label: {
    left:0,
    top:20,
    marginRight:180,
    color: '#f5f76e',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    height: 40,
    width:220,
    backgroundColor: '#000',
    borderRadius: 2,
    paddingHorizontal: 8,
    marginBottom: 8,
    color:"#e9ed37",
  },
    checkboxContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 8,
    
  },
  lembrarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginRight:95
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#f5f76e',
    marginRight: 8,
  },
  checkboxText: {
    color: '#f5f76e',
  },
  button: {
    backgroundColor: '#f5f76e',
    borderColor:'#6b0ee2',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  buttonText: {
    color: '#6b0ee2',
    fontWeight: 'bold',
    textAlign: 'center',
    width:185
  },
});

export default TelaCadastro;