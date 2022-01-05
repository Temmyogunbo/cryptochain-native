import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Transaction} from './components/Transaction';

import { NavigationContainer } from '@react-navigation/native';
import { Home } from './components/Home';
import { ConductTransaction } from './components/ConductTransaction';
import { TransactionPool } from './components/Transaction-Pool';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator,  } from '@react-navigation/bottom-tabs';

const App = () => {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Transact" component={ConductTransaction} />
      <Tab.Screen name="Pool-Map" component={TransactionPool} />
    </Tab.Navigator>
  </NavigationContainer>
  )
};



export default App;
