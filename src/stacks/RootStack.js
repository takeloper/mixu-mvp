import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from '../screens/MainTab';
import LandingScreen from '../screens/LandingScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import UploadQuestionScreen from '../screens/UploadQuestionScreen';

const Stack = createNativeStackNavigator();

function RootStack (){
    return (
        <Stack.Navigator initialRouteName='LandingScreen'>
            <Stack.Screen name="LandingScreen" component={LandingScreen} options={{headerShown:false}}/>
            <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}}/>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}}/>
            <Stack.Screen name="MainTab" component={MainTab} options={{headerShown:false}}/>
            <Stack.Screen name="UploadQuestionScreen" component={UploadQuestionScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

export default RootStack;
