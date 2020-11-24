import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Color from '../constants/Colors'

const MealsNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		CategoryMeals: {
			screen: CategoryMealsScreen
		},
		MealDetail: MealDetailScreen
	},
	{
		defaultNavigationOptions: {
			headerTitleAlign: 'center',
			headerStyle: {
				backgroundColor:
					Platform.OS === 'android' ? Color.primaryColor : ''
			},
			headerTintColor:
				Platform.OS === 'android' ? 'white' : Color.primaryColor
		}
	}
)

export default createAppContainer(MealsNavigator)
