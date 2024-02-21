import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Bars3Icon } from "react-native-heroicons/outline";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TopAppBar = () => {
	return (
		<View className="mx-4 flex-row justify-between items-center mb-2">
			<Pressable
				onPress={() => {
					console.log("Pressed!");
				}}
				style={{
					padding: 10,
					borderRadius: 100,
					backgroundColor: "#DCDCDC",
				}}
			>
				<Bars3Icon size={hp(4)} color="black" />
			</Pressable>
			<Image
				source={require("../../assets/images/avatar.png")}
				style={{ height: hp(6), width: hp(6), borderRadius: hp(2.75) }}
			/>
		</View>
	);
};

export default TopAppBar;
