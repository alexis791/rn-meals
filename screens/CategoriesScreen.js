import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

const CategoriesScreen = (props) => {
	console.log(props)
	return (
		<View style={styles.screen}>
			<Text>The Categories Screen!</Text>
			<Button
				title='Category Meal'
				onPress={() => props.navigation.navigate('CategoryMeals')}
			/>
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

export default CategoriesScreen
