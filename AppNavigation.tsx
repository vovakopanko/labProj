import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/components/navigation/navigations';
import CheckingScreen from './src/Screens/Checking/Checking';
import SavingScreen from './src/Screens/Saving/Saving';
import GoodnessScreen from './src/Screens/Goodness/Goodness';
import HeaderAppTitle from './src/components/navigation/headerTitle';
import HeaderRightBtn from './src/components/navigation/headerRightButtom';
import HeaderLeftBtn from './src/components/navigation/headerLeftBtn';
import ProfileScreen from './src/Screens/Profile/Profile';
import {createStackNavigator} from '@react-navigation/stack';
import {useProfile} from './src/hook/profileHook';
import {StatusBar} from 'react-native';
import {RootAppStackParams, RootAppStackParamsList} from './types';

export const Stack = createStackNavigator<RootAppStackParamsList>();

const AppNavigation: FC = () => {
  const {fullName} = useProfile();
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#f5f5f5'},
        }}>
        <Stack.Screen
          name={RootAppStackParams.DrawScreen}
          component={DrawerNavigation}
        />
        <Stack.Screen
          name={RootAppStackParams.Checking}
          component={CheckingScreen}
          options={({route, navigation}: any) => ({
            headerShown: true,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#c71585',
            },
            headerTitle: () => (
              <HeaderAppTitle
                title={route.params.name}
                subtitle={route.params.info}
              />
            ),
            headerRight: () => <HeaderRightBtn navigation={navigation} />,
            headerLeft: () => <HeaderLeftBtn navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name={RootAppStackParams.Saving}
          component={SavingScreen}
          options={({route, navigation}: any) => ({
            headerShown: true,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#c71585',
            },
            headerTitle: () => (
              <HeaderAppTitle
                title={route.params.name}
                subtitle={route.params.info}
              />
            ),
            headerRight: () => <HeaderRightBtn navigation={navigation} />,
            headerLeft: () => <HeaderLeftBtn navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name={RootAppStackParams.Profile}
          component={ProfileScreen}
          options={({route, navigation}: any) => ({
            headerShown: true,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#c71585',
            },
            headerTitle: () => (
              <HeaderAppTitle title={fullName} subtitle={route.params.info} />
            ),
            headerRight: () => <HeaderRightBtn navigation={navigation} />,
            headerLeft: () => <HeaderLeftBtn navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name={RootAppStackParams.Goodness}
          component={GoodnessScreen}
          options={({route, navigation}: any) => ({
            headerShown: true,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#c71585',
            },
            headerTitle: () => (
              <HeaderAppTitle
                title={route.params.name}
                subtitle={route.params.info}
              />
            ),
            headerRight: () => <HeaderRightBtn navigation={navigation} />,
            headerLeft: () => <HeaderLeftBtn navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
