import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { enableScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import MealNavigator from './navigation/MealsNavigator'
import mealsReducer from './store/reducers/mealsReducer'

enableScreens()

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	})
}
const rootReducer = combineReducers({
	meals: mealsReducer
})
const store = createStore(rootReducer)

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false)

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
			/>
		)
	}

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center'
		}
	})

	return (
		<Provider store={store}>
			<MealNavigator />
		</Provider>
	)
}
