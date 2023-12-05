import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';  

const Footer = () => {
  const navigation = useNavigation();

      
const handleLoginPress = () => {
    navigation.navigate('TelaLogin');
  };

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

const handleCarrinhoPress =()=>{
  navigation.navigate('TelaCarrinho')
};

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleHomePress}>
        <Ionicons name="home" size={24} color="#f5f76e" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} >
        <Ionicons name="notifications" size={24} color="#f5f76e" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={handleCarrinhoPress}>
        <Ionicons name="cart" size={24} color="#f5f76e" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="menu" size={24} color="#f5f76e" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={handleLoginPress}>
        <Ionicons name="person" size={24} color="#f5f76e" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6b0ee2',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 64,
    paddingHorizontal: 16,
    position: 'fixed', // Alterado de 'absolute' para 'fixed'
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Footer;
