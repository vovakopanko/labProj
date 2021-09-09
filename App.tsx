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
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useAuth} from './src/hook/authHook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderLeftBtn from './src/components/navigation/headerLeftBtn';
import ProfileScreen from './src/Screens/Profile/Profile';
import {useProfile} from './src/hook/profileHook';
import SplashScreen from 'react-native-splash-screen';

export type RootAppStackParamsList = {
  [RootAppStackParams.Checking]: undefined;
  [RootAppStackParams.Saving]: undefined;
  [RootAppStackParams.Goodness]: undefined;
  [RootAppStackParams.DrawScreen]: undefined;
  [RootAppStackParams.Proffile]: {info: null | string; name: null | string};
};

export enum RootAppStackParams {
  Checking = 'Checking',
  Saving = 'Saving',
  Goodness = 'Goodness',
  DrawScreen = 'DrawScreen',
  Proffile = 'Proffile',
}

export const Stack = createStackNavigator<RootAppStackParamsList>();

const App: React.FC = () => {
  const {userToken, isLoading, retriveUserToken} = useAuth();
  const {fullName} = useProfile();
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      let token;
      token = null;
      try {
        token = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      retriveUserToken(token);
    }, 0);
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
      <StatusBar barStyle="dark-content" />
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
          component={ChekingScreen}
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
          name={RootAppStackParams.Proffile}
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

const styles = StyleSheet.create({
  isLoading: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default App;
