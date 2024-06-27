import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Home from './src/screens/Home';
import MyPage from './src/screens/MyPage';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Login from './src/screens/Login';
import {useAuth, AuthProvider} from './src/authContext/AuthContext';
import SellScreen from './src/screens/Sell/SellScreen';
import SearchScreen from './src/screens/Search/SearchScreen';
import CategorySreen from './src/screens/Category/CategoryScreen';
import ProductRegi from './src/screens/Sell/SellComponents/ProductRegi';
import SampleChatScreen from './src/screens/Sample/SampleChatScreen';
import CompanyNumberRegiScreen from './src/screens/CompanyRegiNumber/CompanyNumberRegiScreen';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

const AppNavigator = () => {
  const {loggedIn} = useAuth();
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 70,
          },
        })}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="sell"
          component={SellScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="category"
          component={CategorySreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="inbox" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="MyPage"
          component={MyPage}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {loggedIn ? (
        <>
          <Stack.Screen name="SampleChatScreen" component={SampleChatScreen} />
          <Stack.Screen
            name="CompanyNumberRegiScreen"
            component={CompanyNumberRegiScreen}
          />
          <Stack.Screen name="ProductRegi" component={ProductRegi} />
          <Stack.Screen name="Bottom" component={BottomTabScreen} />
          <Stack.Screen name="Home" component={Home} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default App;
