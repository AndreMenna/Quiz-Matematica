import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';
import { FlatList, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#000000' barStyle="light-content"/>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}