import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SearchBar = () => {
	return (
		<View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px] mt-5 mb-5">
			<TextInput
				placeholder="Search..."
				placeholderTextColor={"gray"}
				style={{ fontSize: hp(1.7) }}
				className="flex-1 text-base mb-1 pl-3 tracking-wider"
			/>
			<TouchableOpacity onPress={() => console.log("Search button pressed")}>
				<View className="bg-amber-500 rounded-full p-3">
					<MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="white" />
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default SearchBar;
