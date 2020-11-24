import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoryMealScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Category Meal Screen!</Text>
			<Button
				title='Meal Details'
				onPress={() => props.navigation.navigate('MealDetail')}
			/>
			<Button title='Go back' onPress={() => props.navigation.pop()} />
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default CategoryMealScreen
