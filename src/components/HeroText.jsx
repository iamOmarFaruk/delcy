import { View, Text } from "react-native";
import React from "react";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const HeroText = () => {
	return (
		<View className="mx-4 space-y-2 mb-2 mt-5">
			<Text
				style={{ fontSize: hp(3.8) }}
				className="font-semibold text-neutral-600"
			>
				Hello <Text className="text-amber-500 font-bold">Omar!</Text>
			</Text>

			<Text style={{ fontSize: hp(2) }} className="text-neutral-600">
			What are you hungry for ? 
			</Text>
		</View>
	);
};

export default HeroText;
