import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoriteScreen'
import Color from '../constants/Colors'

const defaultStackNavOptions = {
	headerTitleAlign: 'center',
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor
}

const MealsNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		CategoryMeals: {
			screen: CategoryMealsScreen
		},
		MealDetail: MealDetailScreen
	},
	{
		defaultNavigationOptions: defaultStackNavOptions
	}
)

const FavNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetail: MealDetailScreen
	},
	{ defaultNavigationOptions: defaultStackNavOptions }
)

const tabsScreenConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return (
					<Ionicons
						name='ios-restaurant'
						size={25}
						color={tabInfo.tintColor}
					/>
				)
			},
			tabBarColor: Color.primaryColor
		}
	},
	Favorites: {
		screen: FavNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return (
					<Ionicons
						name='ios-star'
						size={25}
						color={tabInfo.tintColor}
					/>
				)
			},
			tabBarColor: Color.accentColor
		}
	}
}

const MealFavTabNavigator =
	Platform.OS === 'android'
		? createMaterialBottomTabNavigator(tabsScreenConfig, {
				activeColor: 'white',
				shifting: true,
				barStyle: {
					backgroundColor: Color.primaryColor
				}
		  })
		: createBottomTabNavigator(tabsScreenConfig, {
				tabBarOptions: {
					activeTintColor: Colors.accentColor
				}
		  })

export default createAppContainer(MealFavTabNavigator)
