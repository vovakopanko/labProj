import * as React from 'react';
import {StyleSheet, View, Text, Image, Modal} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './components/Screens/Home/Home';
import AccountsScreen from './components/Screens/Accounts/Accounts';
import GivingScreen from './components/Screens/Giving/Giving';
import PaymentsScreen from './components/Screens/Payments/Payments';
import CardsScreen from './components/Screens/Cards/Cards';
import GoodnessScreen from './components/Screens/Goodness/Goodness';

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return focused ? (
              <Image
                source={require('./assets/projectImages/homefocus.png')}
                style={styles.iconBottomBarFocus}
              />
            ) : (
              <Image
                source={require('./assets/projectImages/home.png')}
                style={styles.iconBottomBar}
              />
            );
          } else if (route.name === 'Accounts') {
            return focused ? (
              <Image
                source={require('./assets/projectImages/accountfocus.png')}
                style={styles.iconBottomBarFocus}
              />
            ) : (
              <Image
                source={require('./assets/projectImages/accounts.png')}
                style={styles.iconBottomBar}
              />
            );
          } else if (route.name === 'Giving') {
            return focused ? (
              <Image
                source={require('./assets/projectImages/givingfocus.png')}
                style={styles.iconBottomBarFocus}
              />
            ) : (
              <Image
                source={require('./assets//projectImages/giving.png')}
                style={styles.iconBottomBar}
              />
            );
          } else if (route.name === 'Payments') {
            return focused ? (
              <Image
                source={require('./assets/projectImages/paymentsfocus.png')}
                style={styles.iconBottomBarFocus}
              />
            ) : (
              <Image
                source={require('./assets/projectImages/payment.png')}
                style={styles.iconBottomBar}
              />
            );
          } else if (route.name === 'Cards') {
            return focused ? (
              <Image
                source={require('./assets/projectImages/cardsfocus.png')}
                style={styles.iconBottomBarFocus}
              />
            ) : (
              <Image
                source={require('./assets/projectImages/cards.png')}
                style={styles.iconBottomBar}
              />
            );
          }
        },
        headerShown: false,
        //  tabBarLabelStyle: { color: 'red'},
        tabBarStyle: {backgroundColor: 'mediumvioletred'},
        tabBarActiveTintColor: 'maroon',
        tabBarInactiveTintColor: 'black',
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
      <Image source={require('./assets/projectImages/logo.png')} />
    </View>
  );
}

const DrawerNavigation = () => {
  return (
    <DrawerTab.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'mediumvioletred',
        },
        headerTitle: () => <LogoTitle />,
        headerRight: () => (
          <View>
            <Modal visible={false}>
              <View>
                <Text style={styles.modalBlock}> Hello World!</Text>
              </View>
            </Modal>
            <Image
              source={require('./assets/projectImages/oval.png')}
              style={styles.userLogo}
            />
          </View>
        ),
      }}>
      <DrawerTab.Screen name="Spiral" component={MyTabs} />
    </DrawerTab.Navigator>
  );
};

function CheckingScreen() {
  return (
    <View style={styles.centeringBlock}>
      <Text>CheckingScreen</Text>
    </View>
  );
}

function SavingScreen() {
  return (
    <View style={styles.centeringBlock}>
      <Text>SavingScreen</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const DrawerTab = createDrawerNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'lightgrey'},
      }}>
      <Stack.Screen name=" " component={DrawerNavigation} />
      <Stack.Screen
        name="Checking"
        component={CheckingScreen}
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
  );
}

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
  modalBlock: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    color: 'black',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
