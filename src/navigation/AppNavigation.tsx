import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from '../screen/Login';
import Posts from '../screen/Posts';
import PostDetails from '../screen/PostDetails';
import CounterApp from '../screen/CounterApp';


export type RootStackParamList = {
 Tabs:undefined;
  Login:undefined;
  Posts:undefined;
  PostDetails:{data:object};
  CounterApp:undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MyTabs() {                                                                       // Tab Navigation
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="CounterApp" component={CounterApp} />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (                                                                              // Stack Navigation
                                                                                                
 <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
         <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name='PostDetails' component={PostDetails} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}
