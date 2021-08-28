import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './src/components/navigation/navigations';
import ChekingScreen from './src/Screens/Checking/Checking';
import SavingScreen from './src/Screens/Saving/Saving';
import GoodnessScreen from './src/Screens/Goodness/Goodness';
import HeaderAppTitle from './src/components/navigation/headerTitle';
import HeaderRightBtn from './src/components/navigation/headerRightButtom';

type RootAppStackParams = {
  Checking: undefined;
  Saving: undefined;
  Goodness: undefined;
  ' ': undefined;
};

const Stack = createStackNavigator<RootAppStackParams>();

export default function App() {
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
          options={({route}: any) => ({
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'mediumvioletred',
            },
            headerTitle: () => (
              <HeaderAppTitle
                title={route.params.name}
                subtitle={route.params.info}
              />
            ),
            headerRight: () => <HeaderRightBtn />,
          })}
        />
        <Stack.Screen
          name="Saving"
          component={SavingScreen}
          options={({route}: any) => ({
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'mediumvioletred',
            },
            headerTitle: () => (
              <HeaderAppTitle
                title={route.params.name}
                subtitle={route.params.info}
              />
            ),
            headerRight: () => <HeaderRightBtn />,
          })}
        />
        <Stack.Screen
          name="Goodness"
          component={GoodnessScreen}
          options={({route}: any) => ({
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'mediumvioletred',
            },
            headerTitle: () => (
              <HeaderAppTitle
                title={route.params.name}
                subtitle={route.params.info}
              />
            ),
            headerRight: () => <HeaderRightBtn />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
