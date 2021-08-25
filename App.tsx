import React from 'react';
import {StyleSheet, SafeAreaView, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChekingScreen from './components/Screens/Checking/Checking';
import {NavigationContainer} from '@react-navigation/native';
import CardsScreen from './components/Screens/Cards/Cards';
import GivingScreen from './components/Screens/Giving/Giving';
import PaymentsScreen from './components/Screens/Payments/Payments';
import {createDrawerNavigator} from '@react-navigation/drawer';

const BottomTab = createBottomTabNavigator();
const DrawerTab = createDrawerNavigator();

const BottomNavigate = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Card" component={CardsScreen} />
      <BottomTab.Screen name="Checking" component={ChekingScreen} />
      <BottomTab.Screen name="Giving" component={GivingScreen} />
      <BottomTab.Screen name="Payments" component={PaymentsScreen} />
    </BottomTab.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <DrawerTab.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'lightpink',
        },
        headerRight: () => (
          <Image
            source={require('./assets/projectImages/oval.png')}
            style={styles.userLogo}
          />
        ),
      }}>
      <DrawerTab.Screen name="Card" component={BottomNavigate} />
      <DrawerTab.Screen name="Checking" component={ChekingScreen} />
    </DrawerTab.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer> */}
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userLogo: {
    width: 40,
    height: 40,
    right: 10,
  },
});

export default App;
