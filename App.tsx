/**
 * Doc à faire
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/main/navigation/Navigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListContextProvider, { ListContext } from './src/main/Contexts/ListContext';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ListContextProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
      </ListContextProvider>
    </SafeAreaView>
  );
}
