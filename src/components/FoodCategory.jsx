// Import React Native elements
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Improved Component for Food Category
const FoodCategory = ({ title, imageUri, boxcolor }) => {
    // Determine if imageUri is a module (local) or a remote URI
    // This allows you to pass either a require('./path/to/image.png') or a direct URI 'http://example.com/image.png'
    const imageSource = typeof imageUri === 'string' ? { uri: imageUri } : imageUri;

    return (
        <View style={{...styles.box, backgroundColor: boxcolor}}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

// Styles for the component
const styles = StyleSheet.create({
    box: {
        width: 150, // Set the width as per your requirement
        height: 150, // Set the height as per your requirement
        borderRadius: 20, // Rounded corners
        overflow: 'hidden', // This will hide the parts of the image that overflows the border radius
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically
        position: 'relative', // This will allow us to position the image as a background
        zIndex: 1, // This will make the text appear in front of the image
        marginHorizontal:5, // Add some margin to the left and right of the component
    },
    image: {
        position: 'absolute', // Will position the image as a background
        width:130, 
        height:130, // Set the width and height as per your requirement
        bottom:-30, // This will move the image up a bit
        right:-35,

        zIndex:5, // This will make the image appear behind the text
    },
    text: {
        fontWeight: 'bold', // Bold text
        fontSize:20, // Large text
        color: 'black', // Text color
        zIndex: 10, // This will make the text appear in front of the image
        position: 'absolute', // This will allow us to position the text
        top: 15, // This will move the text down a bit
        color: 'white', // Text color
        left: 15, // This will move the text to the right a bit
    }
});

// Export the component
export default FoodCategory;
