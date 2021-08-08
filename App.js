import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const components = [
    {
      name: 'Home',
      component: HomeScreen,
      icon: (focused) => focused ? 'ios-information-circle' : 'ios-information-circle-outline'
    },
    {
      name: 'Settings',
      component: SettingsScreen,
      icon: () => 'ios-list'
    }
  ];

  const getIcon = (route, focused, components) => {
    for (let k in components) {
      if (components[k].name === route) {
        if (typeof components[k].icon === 'function') {
          return components[k].icon(focused)
        }
        return components[k].icon;
      }
    }
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = getIcon(route.name, focused, components);

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {components.map((row, index) => {
          return <Tab.Screen key={index} name={row.name} component={row.component} />
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}