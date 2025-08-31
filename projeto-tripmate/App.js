//85JX8MshncDvn3Fl
// App.js


//email: teixeiragustavo0423@gmail.com
//xibiurosa
import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import LanguageScreen from './components/LanguageScreen';
import HomeScreen from './components/HomeScreen';
import AccountCreatedScreen from './components/AccountCreatedScreen';
import PreferencesScreen from './components/PreferencesScreen';

import { LanguageProvider } from './contexts/LanguageContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Language" component={LanguageScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Created" component={AccountCreatedScreen} />
          <Stack.Screen name="Preferences" component={PreferencesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageProvider>
  );
}
