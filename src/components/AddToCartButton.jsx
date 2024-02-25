import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AddToCartButton = ({}) => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<View style={styles.itemCounter}>
					<TouchableOpacity
						style={{ ...styles.Counterbutton, marginRight: 15 }}
					>
						<Text style={styles.itemCounterButtonText}>-</Text>
					</TouchableOpacity>
					<Text style={styles.itemCounterText}>10</Text>
					<TouchableOpacity style={{ ...styles.Counterbutton, marginLeft: 15 }}>
						<Text style={styles.itemCounterButtonText}>+</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Add To Cart</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		position: "absolute",
		bottom: 0,
		width: "100%",
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#F8F8F8", // Replace with the color of your choice
	},

	button: {
		backgroundColor: "#F59E0C", // Replace with the color of your choice
		paddingVertical: 15,
		paddingHorizontal: 25,
		borderRadius: 55,
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	itemCounter: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	itemCounterText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	Counterbutton: {
		backgroundColor: "#F59E0C", // Replace with the color of your choice
		padding: 10,
		borderRadius: 55,
		lineHeight: 20,
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	itemCounterButtonText: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
	},
});

export default AddToCartButton;
