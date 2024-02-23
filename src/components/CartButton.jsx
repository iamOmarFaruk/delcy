import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CartButton = ({ buttonText, price, itemCount }) => {
  return (
    <View style={ styles.wrapper}>
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.itemCount}>{itemCount} Items</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
wrapper:{
    position:'absolute', bottom:0, width:'100%'
},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8', // Replace with the color of your choice
  },
  priceContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  price: {
    fontSize:18,
    fontWeight: 'bold',
    color: '#e74c3c', // Replace with the color of your choice
  },
  itemCount: {
    fontSize: 16,
    color: '#95a5a6', // Replace with the color of your choice
  },
  button: {
    backgroundColor: '#e74c3c', // Replace with the color of your choice
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius:55,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartButton;
