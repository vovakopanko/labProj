import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './src/components/navigation/navigations';
import ChekingScreen from './src/Screens/Checking/Checking';
import SavingScreen from './src/Screens/Saving/Saving';
import GoodnessScreen from './src/Screens/Goodness/Goodness';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'lightgrey'},
        }}>
        <Stack.Screen name=" " component={DrawerNavigation} />
        <Stack.Screen
          name="Checking"
          component={ChekingScreen}
          options={{
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'mediumvioletred',
            },
          }}
        />
        <Stack.Screen
          name="Saving"
          component={SavingScreen}
          options={{
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'mediumvioletred',
            },
          }}
        />
        <Stack.Screen
          name="Goodness"
          component={GoodnessScreen}
          options={{
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'mediumvioletred',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
