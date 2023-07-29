import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppNavigatorNavigationProp } from '@util/types';

import AllExpenses from '../screens/AllExpenses';
import ManageExpenses from '../screens/ManageExpenses';
import RecentExpenses from '../screens/RecentExpenses';

import { GlobalStyles } from 'constants/GlobalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from '@components/UI/IconButton';

const Stack = createStackNavigator<AppNavigatorNavigationProp>();
const BottomTab = createBottomTabNavigator();

const ExpensesOverview = (): JSX.Element => {
    return (
        <BottomTab.Navigator screenOptions={({navigation}) => ({
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: '#fff',
            tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            headerRight: ({ tintColor }: any) => <IconButton icon="add" size={24} color={tintColor} onPress={() => navigation.navigate('ManageExpenses')} />
        })}>
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
            <StatusBar backgroundColor={GlobalStyles.colors.primary500} />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                    headerTintColor: '#fff',
                }}>
                    <Stack.Screen
                        name="ExpensesOverview"
                        component={ExpensesOverview}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="ManageExpenses"
                        component={ManageExpenses}
                        options={{
                            presentation: 'modal'
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

export default AppNavigator;
