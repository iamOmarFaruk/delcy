import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SingleFoodpage from "../screens/SingleFoodpage";

const Stack = createNativeStackNavigator();

function AppNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Welcome"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="SingleFoodpage" component={SingleFoodpage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigation;
