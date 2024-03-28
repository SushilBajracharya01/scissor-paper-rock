import React from 'react';
import {Provider} from 'react-redux';
import {store} from './_redux/store';
import Game from './Screen/Game';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from './Screen/StartScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{navigationBarHidden: true}}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={{navigationBarHidden: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
