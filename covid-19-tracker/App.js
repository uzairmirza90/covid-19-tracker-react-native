import Home from './components/Home';
import Emergengy from './components/Emergency';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StatusBar} from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle = "light-content"/>
      <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: {backgroundColor: '#3E4F7A'},
        headerShown: false,
      }}>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused}) => (
              <Icon name='home' color={focused ? 'white': 'lightgrey'} size={30} />
            )}}/>
        <Tab.Screen 
          name="Emergency" 
          component={Emergengy} 
          options={{
            tabBarIcon: ({focused}) => (
              <Icon name='ambulance' color={focused ? "white" : "lightgrey"} size={30} />
            )}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}