import React from 'react';

import { StatusBar, SafeAreaView } from 'react-native';

import Home from './src/pages/Home';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Home />
    </SafeAreaView>
  );
};

export default App;
