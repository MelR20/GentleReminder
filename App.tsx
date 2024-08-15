/**
 * Doc à faire
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/main/navigation/Navigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import CollectionContextProvider, {
  CollectionContext,
} from './src/main/Contexts/CollectionContext';

export default function App() {
  return (
    //todo: fixe safeArea and remove top padding
    <SafeAreaView style={{paddingTop: 20,flex: 1}}> 
      <CollectionContextProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </CollectionContextProvider>
    </SafeAreaView>
  );
}
