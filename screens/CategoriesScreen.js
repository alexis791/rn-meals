import React from 'react'
import {
	View,
	FlatList,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => (
		<CategoryGridTile
			title={itemData.item.title}
			color={itemData.item.color}
			onSelect={() => {
				props.navigation.navigate({
					routeName: 'CategoryMeals',
					params: {
						categoryId: itemData.item.id
					}
				})
			}}
		/>
	)

	return (
		<FlatList
			keyExtractor={(item, key) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	)
}

CategoriesScreen.navigationOptions = {
	title: 'Categories'
}
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default CategoriesScreen
