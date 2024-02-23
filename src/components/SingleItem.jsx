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
    </View>
    <View style={styles.addButton}>
      <TouchableOpacity>
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
    margin: 10,
    marginBottom:20,
    padding: 10,
  },
  image: {
    width:80,
    height:80,
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
   
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});