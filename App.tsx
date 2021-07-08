import React from 'react';
import Home from './src/Home';

const navigation = {
  navigate: (route, {...args}) => console.warn('ASDASDASDASD to', route, args),
};

const App = () => <Home navigation={navigation} />;
export default App;
