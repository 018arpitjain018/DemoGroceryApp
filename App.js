import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './src/Screens/Home';
import Orders from './src/Screens/Orders';
import Favorite from './src/Screens/Favorite';
import Cart from './src/Screens/Cart';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'cube' : 'cube-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'My Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0371CD',
        inactiveTintColor: 'gray',
        labelStyle: { fontFamily: 'Montserrat', fontSize: 14 }
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="My Cart" component={Cart} />
    </Tab.Navigator>
  );
}