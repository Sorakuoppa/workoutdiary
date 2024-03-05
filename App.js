import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from "./components/Settings";
import List from "./components/ListView";
import AddExercise from "./components/AddExercise";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={"Add Workout"} component={AddExercise} 
        options={{tabBarIcon: () => <Ionicons name={"add-circle-outline"} size={24} color={"black"} />}}/>
        <Tab.Screen name={"List"} component={List} 
        options={{tabBarIcon: () => <Ionicons name={"list-outline"} size={24} color={"black"} />}}/>
        <Tab.Screen name={"Settings"} component={Settings} 
        options={{tabBarIcon: () => <Ionicons name={"settings-outline"} size={24} color={"black"} />}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}