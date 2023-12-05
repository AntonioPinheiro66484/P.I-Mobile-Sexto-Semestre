import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartItem = ({ name, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>${price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  itemPrice: {
    fontSize: 16,
  },
});

export default CartItem;