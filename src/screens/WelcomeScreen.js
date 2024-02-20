import { Animated, View, Text, Image, ImageBackground } from "react-native";
import React, { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function WelcomeScreen() {
	const position = useRef(new Animated.Value(1000)).current;
	const navigation = useNavigation();

	useEffect(() => {
		const timer = setTimeout(() => {
			Animated.timing(position, {
				toValue:0, // Final position above the top of the screen to hide the text
				duration: 1000, // Duration of the animation
				useNativeDriver: true, // Use native driver for better performance
			}).start();
		}, 1000); // Delay of 1.5 seconds

     // naviagte to the home screen after 3 seconds
     setTimeout(()=> navigation.navigate('Home'), 2500)
		// Cleanup function to clear the timer when the component unmounts
		return () => clearTimeout(timer);
   
	}, []);
	return (
		<ImageBackground
			source={require("../../assets/images/welcome-bg.jpg")}
			style={{ flex: 1 }}
		>
			<LinearGradient
				colors={[
					"rgba(0, 0, 0, 0)",
					"rgba(0, 0, 0, 0.5)",
					"rgba(0, 0, 0, 0.8)",
					"rgba(0, 0, 0, 0.5)",
					"rgba(0, 0, 0, 0)",
				]}
				start={{ x: 0.5, y: 0.5 }}
				end={{ x: 1, y: 1 }}
				locations={[0, 0.2, 0.5, 0.8, 1]}
				style={{ flex: 1 }}
			>
				<StatusBar style="light" />
				<View
					className="flex-1 justify-center items-center space-y-10"
					style={{ marginTop: "130%" }}
				>
					{/* title and punchline */}
					<Animated.View
						style={{
							transform: [{ translateY: position }],
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
						}}
						className="flex items-center space-y-1"
					>
						<Text
							style={{ fontSize: hp(7), letterSpacing: 5 }}
							className="font-bold text-white tracking-wider"
						>
							Delcy
						</Text>
						<Text
							style={{ fontSize: hp(2) }}
							className="font-medium text-white tracking-widest"
						>
							Delicious Food App
						</Text>
					</Animated.View>
				</View>
			</LinearGradient>
		</ImageBackground>
	);
}
