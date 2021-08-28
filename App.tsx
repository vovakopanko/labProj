import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './src/components/navigation/navigations';
import ChekingScreen from './src/Screens/Checking/Checking';
import SavingScreen from './src/Screens/Saving/Saving';
import GoodnessScreen from './src/Screens/Goodness/Goodness';

const Stack = createStackNavigator();

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
            //   headerRight: () => (
            //     <View>
            //       <TouchableOpacity onPress={() => console.log('Hi')}>
            //         <Image
            //           source={require('./../../assets/projectImages/oval.png')}
            //           style={styles.userLogo}
            //         />
            //       </TouchableOpacity>
            //     </View>
            //   ),
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
