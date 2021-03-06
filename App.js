import React from "react";

import { View, Text, StyleSheet, StatusBar } from "react-native";
import { colors } from "./src/global/styles";
import SignInScreen from "./src/screens/authScreens/SignInScreen";
import Menu from "./src/screens/menuScreen/Menu";
import RootNavigation from "./navigation";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar barStyle='light-content' backgroundColor={colors.statusbar} />
			<RootNavigation />
			{/* <SignInScreen /> */}
			{/* <Menu /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});
