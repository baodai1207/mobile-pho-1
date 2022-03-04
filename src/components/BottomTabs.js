import { View, Text } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BottomTabs({ navigation }) {
	return (
		<View
			style={{
				flexDirection: "row",
				margin: 8,
				marginHorizontal: 30,
				justifyContent: "space-evenly",
				// position: "absolute",
			}}
		>
			<TouchableOpacity
				activeOpacity={1}
				onPress={() => navigation.navigate("Menu")}
			>
				<Icon icon='receipt' text='Menu' />
			</TouchableOpacity>

			<TouchableOpacity
				activeOpacity={1}
				onPress={() => navigation.navigate("SignInScreen")}
			>
				<Icon icon='user' text='Account' />
			</TouchableOpacity>
		</View>
	);
}

const Icon = props => (
	<View>
		<FontAwesome5
			name={props.icon}
			size={25}
			style={{
				marginBottom: 3,
				alignSelf: "center",
			}}
		/>
		<Text>{props.text}</Text>
	</View>
);
