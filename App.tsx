import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './src/components/navigation/navigations';
import ChekingScreen from './src/Screens/Checking/Checking';
import SavingScreen from './src/Screens/Saving/Saving';
import GoodnessScreen from './src/Screens/Goodness/Goodness';
import HeaderAppTitle from './src/components/navigation/headerTitle';
import HeaderRightBtn from './src/components/navigation/headerRightButtom';
import LoginScreen from './src/Screens/Login/Login';
import {ActivityIndicator, View} from 'react-native';
import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useAuth} from './src/hook/authHook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderLeftBtn from './src/components/navigation/headerLeftBtn';
import ProfileScreen from './src/Screens/Profile/Profile';

export type RootAppStackParams = {
  Checking: undefined;
  Saving: undefined;
  Goodness: undefined;
  DrawScreen: undefined;
  Proffile: undefined;
};

const Stack = createStackNavigator<RootAppStackParams>();

export default function App() {
  const {userToken, isLoading, retriveUserToken} = useAuth();
  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      retriveUserToken(userToken);
    }, 5000);
  }, [retriveUserToken]);

  if (isLoading) {
    return (
      <View style={styles.isLoading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (userToken !== 'iTechArt2021') {
    return <LoginScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'lightgrey'},
        }}>
        <Stack.Screen name="DrawScreen" component={DrawerNavigation} />
        <Stack.Screen
          name="Checking"
          component={ChekingScreen}
          options={({route, navigation}: any) => ({
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
            headerRight: () => <HeaderRightBtn navigation={navigation} />,
            headerLeft: () => <HeaderLeftBtn navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Saving"
          component={SavingScreen}
          options={({route, navigation}: any) => ({
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
            headerRight: () => <HeaderRightBtn navigation={navigation} />,
            headerLeft: () => <HeaderLeftBtn navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Proffile"
          component={ProfileScreen}
          options={({route, navigation}: any) => ({
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
            headerRight: () => <HeaderRightBtn navigation={navigation} />,
            headerLeft: () => <HeaderLeftBtn navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Goodness"
          component={GoodnessScreen}
          options={({route, navigation}: any) => ({
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
            headerRight: () => <HeaderRightBtn navigation={navigation} />,
            headerLeft: () => <HeaderLeftBtn navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  isLoading: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
