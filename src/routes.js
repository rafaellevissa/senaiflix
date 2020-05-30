import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Cursos from './pages/cursos';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions = {{headerShown: false}}>
                <AppStack.Screen name="cursos" component={Cursos}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}