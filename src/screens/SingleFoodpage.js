import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import FoodCategory from "../components/FoodCategory";
import TopAppBar from "../components/TopAppBar";
import HeroText from "../components/HeroText";
import SearchBar from "../components/SearchBar";
import SingleItem from "../components/SingleItem";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CartButton from "../components/CartButton";
import FoodItemCard from "../components/FoodItemCard";
export default function SingleFoodpage() {
	return (
		<SafeAreaProvider style={{ backgroundColor: "white" }}>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style="dark" />
				<View
					style={{ flex: 1, backgroundColor: "white", position: "relative" }}
				>
					<View style={{ marginTop: 14 }}>
						{/* avatar and bell icon */}
						<TopAppBar type="singleItem" />

						{/* categories */}
						<ScrollView
							showsVerticalScrollIndicator={false} // Hides the scroll indicator
							contentContainerStyle={{
								paddingBottom: 5, // Adds padding at the end if needed
								paddingTop: 10,
							}}
						>
							{/* single iteams */}
							<ScrollView
								showsVerticalScrollIndicator={false} // Hides the scroll indicator
								contentContainerStyle={{
									paddingBottom: 400, // Adds padding at the end if needed
									paddingTop: 10,
								}}
							>
								<View style={{ padding: 15 }}>
									<FoodItemCard
										title="Egg Salad"
										price="9.50"
										imageUrl={require("../../assets/images/welcome-bg.jpg")} // Replace with your local image path
									/>
									<View style={{ marginTop: 18 }}>
										<Text style={{ fontSize: 20 }}>
											Quisque nec sapien id tellus accumsan iaculis.
											Pellentesque laoreet dui leo, in lobortis est tempus a
											Nunc fringilla at mi at aliquet. In hac habitasse platea
											dictumst.
										</Text>
									</View>
								</View>
							</ScrollView>
						</ScrollView>
					</View>
					<CartButton buttonText="Go to Cart" price="$24.99" itemCount="3" />
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
