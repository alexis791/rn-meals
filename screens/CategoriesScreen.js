import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const renderGridItem = (itemData) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.gridItem}>{itemData.item.title}</Text>
		</View>
	)
}

const CategoriesScreen = (props) => {
	return (
		<FlatList
			keyExtractor={(item, key) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150
	}
})

export default CategoriesScreen
