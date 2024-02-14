import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Home from './src/screens/Home';
import MyPage from './src/screens/MyPage';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Login from './src/screens/Login';
import { useAuth, AuthProvider } from './src/authContext/AuthContext';

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
  const { loggedIn } = useAuth();
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabScreen = () => {
    return(
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarHideOnKeyboard : true,
          tabBarShowLabel : false,
          headerShown: false,
          tabBarStyle:{
            height: 70,
          }
        })}>
        <Tab.Screen options={{
          tabBarIcon : ({color,size}) => <FontAwesome name = "home" size={size} color={color}/>
        }} name="Home" component={Home} />
        <Tab.Screen name="MyPage" component={MyPage} options={{
          tabBarIcon : ({color,size}) => <FontAwesome name = "user" size={size} color={color}/>
        }}/>
      </Tab.Navigator>
    )
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {loggedIn ? (
        <>
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
