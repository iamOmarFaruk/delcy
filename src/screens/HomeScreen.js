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
export default function HomeScreen() {
	return (
		<SafeAreaProvider style={{ backgroundColor: "white" }}>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style="dark" />
				<View
					style={{ flex: 1, backgroundColor: "white", position: "relative" }}
				>
					<View style={{ marginTop: 14 }}>
						{/* avatar and bell icon */}
						<TopAppBar />

						{/* greetings and punchline */}
						<HeroText />

						{/* search bar */}
						<SearchBar />

						{/* categories */}
						<ScrollView
							showsVerticalScrollIndicator={false} // Hides the scroll indicator
							contentContainerStyle={{
								paddingBottom: 5, // Adds padding at the end if needed
								paddingTop: 10,
							}}
						>
							<ScrollView
								horizontal={true} // Enables horizontal scroll
								showsHorizontalScrollIndicator={false} // Hides the scroll indicator
								contentContainerStyle={{
									paddingRight: 10, // Adds padding at the end if needed
									paddingBottom: 10,
								}}
							>
								<View style={{ flexDirection: "row", paddingHorizontal: 5 }}>
									<FoodCategory
										boxcolor="#eccc68"
										title="Lunch"
										imageUri={require("../../assets/images/welcome.png")}
									/>
									<FoodCategory
										boxcolor="#747d8c"
										title="Dinner"
										imageUri={require("../../assets/images/welcome.png")}
									/>
									<FoodCategory
										boxcolor="#ff4757"
										title="Dinner"
										imageUri={require("../../assets/images/welcome.png")}
									/>
									<FoodCategory
										boxcolor="#70a1ff"
										title="Dinner"
										imageUri={require("../../assets/images/welcome.png")}
									/>
								</View>
							</ScrollView>

							{/* single iteams */}
							<ScrollView
								showsVerticalScrollIndicator={false} // Hides the scroll indicator
								contentContainerStyle={{
									paddingBottom: 400, // Adds padding at the end if needed
									paddingTop: 10,
								}}
							>
								<SingleItem
									title="Mushroom Pizza"
									weight="410g"
									price="$14.99"
									imageUrl={require("../../assets/images/welcome.png")}
								/>

								<SingleItem
									title="Mushroom Pizza"
									weight="410g"
									price="$14.99"
									imageUrl={require("../../assets/images/welcome.png")}
								/>

								<SingleItem
									title="Mushroom Pizza"
									weight="410g"
									price="$14.99"
									imageUrl={require("../../assets/images/welcome.png")}
								/>
								<SingleItem
									title="Mushroom Pizza"
									weight="410g"
									price="$14.99"
									imageUrl={require("../../assets/images/welcome.png")}
								/>
							</ScrollView>
						</ScrollView>
					</View>
					<CartButton buttonText="Go to Cart" price="$24.99" itemCount="3" />
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
