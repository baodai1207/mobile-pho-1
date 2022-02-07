import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const styles = StyleSheet.create({
	menuItemStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 20,
	},
	titleStyle: {
		fontSize: 19,
		fontWeight: "600",
	},
});

const RestaurantItems = ({ foods }) => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{foods.map((food, index) => (
				<View key={index} style={styles.menuItemStyle}>
					<BouncyCheckbox
						iconStyle={{
							borderColor: "lightgray",
							borderRadius: 0,
						}}
						fillColor='green'
					/>
					<FoodInfo food={food} />
					<FoodImage food={food} />
				</View>
			))}
			<View style={{ height: 360 }} />
		</ScrollView>
	);
};

const FoodInfo = props => (
	<View style={{ width: 240, justifyContent: "space-evenly" }}>
		<Text style={styles.titleStyle}>{props.food.title}</Text>
		<Text>{props.food.description}</Text>
		<Text>{props.food.price}</Text>
	</View>
);

const FoodImage = ({ ...props }) => (
	<View>
		<Image
			source={{ uri: props.food.image }}
			style={{
				width: 100,
				height: 100,
				borderRadius: 8,
				marginRight: 20,
			}}
		/>
	</View>
);

export default RestaurantItems;
