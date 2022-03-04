import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Menu from "./src/screens/menuScreen/Menu";
import SignInScreen from "./src/screens/authScreens/SignInScreen";

export default function RootNavigation() {
	const Stack = createStackNavigator();
	const screenOptions = {
		headerShown: false,
	};

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Menu' screenOptions={screenOptions}>
				<Stack.Screen name='SignInScreen' component={SignInScreen} />
				<Stack.Screen name='Menu' component={Menu} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
