import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllExpenses from '../screens/AllExpenses';
import ManageExpenses from '../screens/ManageExpenses';
import RecentExpenses from '../screens/RecentExpenses';

import { GlobalStyles } from '../constants/GlobalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const ExpensesOverview = (): JSX.Element => {
    return (
        <BottomTab.Navigator screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: '#fff',
            tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
        }}>
            <BottomTab.Screen 
                name="RecentExpenses" 
                component={RecentExpenses}
                options={{
                    title: 'Recent Expenses',
                    tabBarLabel: 'Recent',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="hourglass" size={size} color={color} />
                    )
                }}
            ></BottomTab.Screen>
            <BottomTab.Screen 
                name="AllExpenses" 
                component={AllExpenses}
                options={{
                    title: 'All Expenses',
                    tabBarLabel: 'All Expenses',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="calendar" size={size} color={color} />
                    )
                }}
            ></BottomTab.Screen>
        </BottomTab.Navigator>
    );
}

function AppNavigator() {

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="ExpensesOverview"
                        component={ExpensesOverview}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

export default AppNavigator;
