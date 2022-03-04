import { View, Text, Image } from "react-native";
import React from "react";

const restaurantInfo = {
	name: "Pho Number One ♥",
	image:
		"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_1200,h_800,f_auto,fl_lossy,q_80,c_fit/dewlafd9ut69o2vdosmq",
	price: "$$",
	reviews: "500",
	rating: 4.5,
	categories: [{ title: "Vietnamese Cuisine" }, { title: "Noodle" }],
};

const About = () => {
	const { name, image, price, reviews, rating, categories } = restaurantInfo;

	const formattedCategories = categories.map(cat => cat.title).join(" • ");

	const description = `${formattedCategories} ${
		price ? " • " + price : ""
	} • 🎫 • ${rating} 🌟(${reviews}+)`;
	return (
		<View>
			<RestaurantImage image={image} />
			<RestaurantName name={name} />
			<RestaurantDescription description={description} />
		</View>
	);
};

const RestaurantImage = props => (
	<Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = props => (
	<Text
		style={{
			fontSize: 29,
			fontWeight: "bold",
			marginTop: 10,
			marginHorizontal: 15,
		}}
	>
		{props.name}
	</Text>
);

const RestaurantDescription = props => (
	<Text
		style={{
			marginTop: 10,
			marginHorizontal: 15,
			fontWeight: "400",
			fontSize: 15.5,
		}}
	>
		{props.description}
	</Text>
);

export default About;
