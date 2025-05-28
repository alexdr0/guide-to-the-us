import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import LanguagePickerScreen from '../screens/LanguagePickerScreen';
import HomeScreen from '../screens/HomeScreen';
import LegalFinancialScreen from '../screens/LegalFinancialScreen';
import EducationScreen from '../screens/EducationScreen';
import TransportationScreen from '../screens/TransportationScreen';
import HousingScreen from '../screens/HousingScreen';
import NormsCustomsScreen from '../screens/NormsCustomsScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Legal') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Education') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'Transportation') {
            iconName = focused ? 'car' : 'car-outline';
          } else if (route.name === 'Housing') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'More') {
            iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0066CC',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#0066CC',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Home' }}
      />
      <Tab.Screen 
        name="Legal" 
        component={LegalFinancialScreen} 
        options={{ title: 'Legal & Financial' }}
      />
      <Tab.Screen 
        name="Education" 
        component={EducationScreen} 
        options={{ title: 'Education' }}
      />
      <Tab.Screen 
        name="Transportation" 
        component={TransportationScreen} 
        options={{ title: 'Transportation' }}
      />
      <Tab.Screen 
        name="Housing" 
        component={HousingScreen} 
        options={{ title: 'Housing' }}
      />
      <Tab.Screen 
        name="More" 
        component={NormsCustomsScreen} 
        options={{ title: 'More' }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="LanguagePicker" 
        component={LanguagePickerScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Main" 
        component={TabNavigator} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{ 
          title: 'Search',
          headerStyle: { backgroundColor: '#0066CC' },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen 
        name="Emergency" 
        component={EmergencyScreen} 
        options={{ 
          title: 'Emergency Information',
          headerStyle: { backgroundColor: '#DC3545' },
          headerTintColor: '#fff'
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
