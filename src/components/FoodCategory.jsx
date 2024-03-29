import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FoodCategory = ({ title, imageUri, boxcolor }) => {
    const imageSource = typeof imageUri === 'string' ? { uri: imageUri } : imageUri;

    return (
        <View style={{...styles.box, backgroundColor: boxcolor}}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

export default FoodCategory;

const styles = StyleSheet.create({
    box: {
        width: 130,
        height: 130,
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
        marginHorizontal:8,
    },
    image: {
        position: 'absolute',
        width:120, 
        height:120,
        bottom:-40,
        right:-50,
        zIndex:5,
    },
    text: {
        fontWeight: 'bold',
        fontSize:20,
        color: 'black',
        zIndex: 10,
        position: 'absolute',
        top: 15,
        color: 'white',
        left: 15,
    }
});
