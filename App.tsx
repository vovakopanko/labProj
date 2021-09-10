import * as React from 'react';
import LoginScreen from './src/Screens/Login/Login';
import {useEffect} from 'react';
import {useAuth} from './src/hook/authHook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './AppNavigation';
import Loading from './src/components/Loading/Loading';

const App: React.FC = () => {
  const {userToken, isLoading, retrieveUserToken} = useAuth();
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
      retrieveUserToken(token);
    }, 0);
  }, [retrieveUserToken]);

  if (isLoading) {
    <Loading />;
  }

  if (userToken !== 'iTechArt2021') {
    return <LoginScreen />;
  }
  return <AppNavigation />;
};

export default App;
