import { View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { Bars3Icon, ArrowLeftIcon } from "react-native-heroicons/outline"; // Import ArrowLeftIcon for the back button
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TopAppBar = ({ type }) => {
	const navigation = useNavigation(); // Hook to control navigation

	// Function to handle the press action based on the type prop
	const handlePress = () => {
		if (type === "singleItem") {
			navigation.goBack(); // Navigate back to the previous screen
		} else {
			console.log("Menu Pressed!");
		}
	};

	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				marginHorizontal: wp(4),
				marginBottom: hp(0.5),
				paddingVertical: hp(1),
			}}
		>
			<Pressable
				onPress={handlePress}
				style={{
					padding: 10,
					borderRadius: 100,
					backgroundColor: "#DCDCDC",
				}}
			>
				{type === "singleItem" ? (
					// Render back button if type is 'singleItem'
					<ArrowLeftIcon size={hp(4)} color="black" />
				) : (
					// Render menu button otherwise
					<Bars3Icon size={hp(4)} color="black" />
				)}
			</Pressable>
			<Image
				source={require("../../assets/images/avatar.png")}
				style={{ height: hp(6), width: hp(6), borderRadius: hp(3) }}
			/>
		</View>
	);
};

export default TopAppBar;
