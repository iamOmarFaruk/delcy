import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import FoodCategory from "../components/FoodCategory";
import axios from "axios";
import Recipes from "../components/recipes";
import TopAppBar from "../components/TopAppBar";
import HeroText from "../components/HeroText";
import SearchBar from "../components/SearchBar";

export default function HomeScreen() {
	const [activeCategory, setActiveCategory] = useState("Beef");
	const [categories, setCategories] = useState([]);
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		getCategories();
		getRecipes();
	}, []);

	const handleChangeCategory = (category) => {
		getRecipes(category);
		setActiveCategory(category);
		setMeals([]);
	};

	const getCategories = async () => {
		try {
			const response = await axios.get(
				"https://themealdb.com/api/json/v1/1/categories.php"
			);
			// console.log('got categories: ',response.data);
			if (response && response.data) {
				setCategories(response.data.categories);
			}
		} catch (err) {
			console.log("error: ", err.message);
		}
	};
	const getRecipes = async (category = "Beef") => {
		try {
			const response = await axios.get(
				`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
			);
			// console.log('got recipes: ',response.data);
			if (response && response.data) {
				setMeals(response.data.meals);
			}
		} catch (err) {
			console.log("error: ", err.message);
		}
	};

	return (
		<View className="flex-1 bg-white">
			<StatusBar style="dark" />
			<View className="space-y-6 pt-14">
				{/* avatar and bell icon */}
				<TopAppBar />

				{/* greetings and punchline */}
				<HeroText />

				{/* search bar */}
				<SearchBar />

				{/* categories */}
				<ScrollView
      horizontal={true} // Enables horizontal scroll
      showsHorizontalScrollIndicator={false} // Hides the scroll indicator
      contentContainerStyle={{
        paddingRight: 10, // Adds padding at the end if needed
      }}
    >
				<View style={{ flexDirection: 'row', paddingHorizontal: 5 }}>
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


				{/* recipes */}
				<View className="fixed inset-0">
					<Recipes meals={meals} categories={categories} />
				</View>
			</View>
		</View>
	);
}
