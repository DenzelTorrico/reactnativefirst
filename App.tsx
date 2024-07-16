// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ImageScreen from './screens/ImageScreen'; // Asegúrate de importar correctamente
import ComidaScreen from './screens/ComidaScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Image" component={ImageScreen} options={{headerLeft:null}} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Foods" component={ComidaScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}


