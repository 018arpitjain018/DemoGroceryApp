/**
 * @format
 */

import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

const app = () => {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    )
}

AppRegistry.registerComponent(appName, () => app);
