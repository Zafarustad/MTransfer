import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Intro from '../components/Intro';
import DashBoard from '../components/Dashboard/Dashboard';
import Search from '../components/Search/Search';
import Requests from '../components/Requests';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator
      initialRouteName="DashBoard"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#010A43',
          width: 250,
        },
        drawerLabelStyle: {
          color: '#FFFFFF',
          fontWeight: '400',
        },
      }}>
      <Drawer.Screen
        name="DashBoard"
        component={DashBoard}
        options={{drawerLabel: 'Dashboard'}}
      />
      <Drawer.Screen name="Requests" component={Requests} />
    </Drawer.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
