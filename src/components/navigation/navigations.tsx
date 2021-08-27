import * as React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  Button,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../Screens/Home/Home';
import AccountsScreen from '../../Screens/Accounts/Accounts';
import GivingScreen from '../../Screens/Giving/Giving';
import PaymentsScreen from '../../Screens/Payments/Payments';
import CardsScreen from '../../Screens/Cards/Cards';

const isAuth = true; // if your account autorizate

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return focused ? (
              <Image
                source={require('../../assets/projectImages/homefocus.png')}
                style={styles.iconBottomBarFocus}
              />
            ) : (
              <Image
                source={require('../../assets/projectImages/home.png')}
                style={styles.iconBottomBar}
              />
            );
          } else if (route.name === 'Accounts') {
            return focused ? (
              <Image
                source={require('../../assets/projectImages/accountfocus.png')}
                style={styles.iconBottomBarFocus}
              />
            ) : (
              <Image
                source={require('../../assets/projectImages/accounts.png')}
                style={styles.iconBottomBar}
              />
            );
          } else if (route.name === 'Giving') {
            return focused ? (
              <Image
                source={require('../../assets/projectImages/givingfocus.png')}
                style={styles.iconBottomBarFocus}
              />
            ) : (
              <Image
                source={require('../../assets/projectImages/giving.png')}
                style={styles.iconBottomBar}
              />
            );
          } else if (route.name === 'Payments') {
            return focused ? (
              <Image
                source={require('../../assets/projectImages/paymentsfocus.png')}
                style={styles.iconBottomBarFocus}
              />
            ) : (
              <Image
                source={require('../../assets/projectImages/payment.png')}
                style={styles.iconBottomBar}
              />
            );
          } else if (route.name === 'Cards') {
            return focused ? (
              <Image
                source={require('../../assets/projectImages/cardsfocus.png')}
                style={styles.iconBottomBarFocus}
              />
            ) : (
              <Image
                source={require('../../assets/projectImages/cards.png')}
                style={styles.iconBottomBar}
              />
            );
          }
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isAuth ? 'mediumvioletred' : 'white',
          opacity: 0.95,
          borderTopWidth: 0,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        },
        tabBarActiveTintColor: 'maroon',
        tabBarInactiveTintColor: 'black',
        tabBarOptions: {
          showIcon: true,
          showLabel: false,
          lazyLoad: true,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Accounts" component={AccountsScreen} />
      <Tab.Screen name="Giving" component={GivingScreen} />
      <Tab.Screen name="Payments" component={PaymentsScreen} />
      <Tab.Screen name="Cards" component={CardsScreen} />
    </Tab.Navigator>
  );
}

function LogoTitle() {
  return (
    <View>
      <Image source={require('./../../assets/projectImages/logo.png')} />
    </View>
  );
}

export default function DrawerNavigation() {
  const [isSignOutOpen, setIsSignOutOpen] = React.useState(false);

  const signOutChangeHandler = () => {
    setIsSignOutOpen(!isSignOutOpen);
    console.log('Hello');
  };
  return (
    <DrawerTab.Navigator
      screenOptions={{
        headerTintColor: isAuth ? 'black' : 'white',
        headerStyle: {
          backgroundColor: isAuth ? 'mediumvioletred' : 'white',
        },
        headerTitle: () => <LogoTitle />,
        headerRight: () => (
          <View>
            <TouchableOpacity onPress={signOutChangeHandler}>
              <Image
                source={require('./../../assets/projectImages/oval.png')}
                style={styles.userLogo}
              />
            </TouchableOpacity>
            <Modal
              animationType="fade"
              visible={isSignOutOpen}
              onRequestClose={signOutChangeHandler}
              transparent={false}>
              <View style={styles.signOutModalContainer}>
                <Text style={styles.signOutModalText}>Sign Out</Text>
                <Button title="Close modal" onPress={signOutChangeHandler} />
              </View>
            </Modal>
          </View>
        ),
      }}>
      <DrawerTab.Screen name="Spiral" component={MyTabs} />
    </DrawerTab.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const DrawerTab = createDrawerNavigator();

const styles = StyleSheet.create({
  userLogo: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  iconBottomBar: {
    width: 25,
    height: 25,
  },
  iconBottomBarFocus: {
    width: 28,
    height: 28,
  },
  centeringBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  signOutModalText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
});
