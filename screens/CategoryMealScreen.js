import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealScreen = (props) => {
	const renderMealItem = (itemData) => (
		<MealItem
			title={itemData.item.title}
			image={itemData.item.imageUrl}
			duration={itemData.item.duration}
			complexity={itemData.item.complexity}
			affordability={itemData.item.affordability}
			onSelectMeal={() => {
				props.navigation.navigate({
					routeName: 'MealDetail',
					params: {
						mealId: itemData.item.id
					}
				})
			}}
		/>
	)

	const catId = props.navigation.getParam('categoryId')

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	)

	return (
		<View style={styles.screen}>
			<FlatList
				keyExtractor={(item) => item.id}
				data={displayedMeals}
				renderItem={renderMealItem}
			/>
		</View>
	)
}

CategoryMealScreen.navigationOptions = (navigateParams) => {
	const catId = navigateParams.navigation.getParam('categoryId')

	const selectedCategory = CATEGORIES.find((item) => item.id === catId)

	return {
		headerTitle: selectedCategory.title
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 15
	}
})

export default CategoryMealScreen
