import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const FoodItemCard = ({ title, price, imageUrl }) => {
	return (
		<View style={styles.card}>
			<Image source={imageUrl} style={styles.image} />
			<View style={styles.textContainer}>
				<View style={styles.titleWrapper}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.subtitle}>{title}</Text>
				</View>

				<View style={styles.priceWrapper}>
					<Text style={styles.priceUnit}>$</Text>
					<Text style={styles.price}>{price}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
	},
	image: {
		width: "100%",
		height: undefined,
		aspectRatio: 1, // Adjust this value to match your image's aspect ratio
		borderRadius: 10,
	},
	textContainer: {
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 15,
		marginBottom: 15,
	},
	titleWrapper: {
		flex: 1,
		gap: 5,
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 15,
		color: "#a9a9a9", // This is an example color, adjust as needed
	},
	priceWrapper: {
		flex: 2,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	priceUnit: {
		fontSize: 15,
		color: "#F59E0C", // This is an example color, adjust as needed
		marginTop: 10,
	},
	price: {
		fontSize: 30,
		fontWeight: "600",
		color: "#F59E0C", // This is an example color, adjust as needed
	},
});

export default FoodItemCard;
