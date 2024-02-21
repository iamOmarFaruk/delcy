// Import React Native elements
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Improved Component for Food Category
const FoodCategory = ({ title, imageUri }) => {
    // Determine if imageUri is a module (local) or a remote URI
    // This allows you to pass either a require('./path/to/image.png') or a direct URI 'http://example.com/image.png'
    const imageSource = typeof imageUri === 'string' ? { uri: imageUri } : imageUri;

    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

// Styles for the component
const styles = StyleSheet.create({
    container: {
        width: 150, // Set the width as per your requirement
        height: 150, // Set the height as per your requirement
        borderRadius: 20, // Rounded corners
        overflow: 'hidden', // This will hide the parts of the image that overflows the border radius
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically
        backgroundColor: '#FFA', // Temporary background color
    },
    image: {
        position: 'absolute', // Will position the image as a background
        width: '100%', // Full width
        height: '100%', // Full height
    },
    text: {
        fontWeight: 'bold', // Bold text
        fontSize: 24, // Large text
        color: 'black', // Text color
        // Additional styling for text shadow, etc. can be added here
    }
});

// Export the component
export default FoodCategory;
