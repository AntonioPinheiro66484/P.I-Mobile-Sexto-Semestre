
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Header  from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CardProduto from '../components/CardProduto/CardProduto'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header/>
          <View style={styles.bannerContainer}>
            <Image
              source={require('../assets/banner.png')}
              style={styles.bannerImage}
            />
          <CardProduto style={styles.card} name="A arte da guerra" price="29.99" />
        </View>
      </View>
        <Footer/>
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

  card:{
    flex:1,
    width:100,
    height:0,
  },
  
   bannerContainer: {
    marginTop: 0, 
  },

  bannerImage: {
    width: 315,
    height: 315, 
  },
  
});