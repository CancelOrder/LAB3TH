import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './src/screens/CategoriesScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ContactDetailScreen from './src/screens/ContactDetailScreen'; // Import the screen

// Stack Navigator for Categories
const Stack = createStackNavigator();
const CategoriesStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#f8f8f8' },
      headerTitleStyle: { fontWeight: 'bold', fontSize: 16 },
      headerTintColor: 'black',
    }}
  >
    <Stack.Screen
      name="Contacts"
      component={CategoriesScreen}
      options={{
        title: 'Contacts',
        headerBackTitle: 'Back',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ContactDetail"  // Ensure the name matches
      component={ContactDetailScreen}  // Ensure the component is correctly passed here
      options={{
        title: 'Contact Detail',
      }}
    />
  </Stack.Navigator>
);


const FavoritesStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#f8f8f8' },
      headerTitleStyle: { fontWeight: 'bold', fontSize: 16 },
      headerTintColor: 'black',
    }}
  >
    <Stack.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        title: 'Favorites',
        headerBackTitle: 'Back',
      }}
    />
  </Stack.Navigator>
);

const SettingsStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#f8f8f8' },
      headerTitleStyle: { fontWeight: 'bold', fontSize: 16 },
      headerTintColor: 'black',
    }}
  >
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        title: 'Settings',
        headerBackTitle: 'Back',
      }}
    />
  </Stack.Navigator>
);

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Categories"
    screenOptions={{
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    }}

  >
    <Tab.Screen name="Contacts" component={CategoriesStackNavigator} />
    <Tab.Screen name="Favorites" component={FavoritesStackNavigator} />
    <Tab.Screen name="Settings" component={SettingsStackNavigator} />
  </Tab.Navigator>
);

// Create Drawer Navigator
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Drawer Navigator */}
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true, // Hide the header for Drawer.Navigator
        }}
      >
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{ drawerLabel: 'Home' }}

        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesStackNavigator}
          options={{ drawerLabel: 'Favorites' }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsStackNavigator}
          options={{ drawerLabel: 'Settings' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
