import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SingleItem = ({ title, weight, price, imageUrl }) => {
  const imageSource = typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl;

  return (
    <View style={styles.container}>
    <Image source={imageSource} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.weight}>{weight}</Text>
      <Text style={styles.price}>{price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};



export default SingleItem;



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, // for Android shadow
    shadowOffset: { width: 1, height: 1 }, // for iOS shadow
    shadowColor: '#333',
    shadowOpacity: 0.3,
    margin: 10,
    marginBottom:20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    gap:8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weight: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    color: '#F59E0A',
    fontWeight: 'bold',

  },
  addButton: {
    backgroundColor: '#F59E0A',
    padding:5,
    borderRadius: 55,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    bottom: 10,
   
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    lineHeight:30, // Ensures the '+' is centered
    left:1,
  },
});