import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Page1 from "../screens/Page1";
import Page2 from "../screens/Page2";
import Page3 from "../screens/Page3";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SingleStack = () => {
    return(<Stack.Navigator>
        <Stack.Screen
            name="Pagina 1"
            component={Page1}
            options={{ title: "Formulario" }}
        />
        <Stack.Screen
            name="Pagina 2"
            component={Page2}
            options={{ title: "Usuarios" }}
        />
        <Stack.Screen
            name="Pagina 3"
            component={Page3}
            options={{ title: "Usuario a Borrar" }}
        />
    </Stack.Navigator>)
};




const Navigation = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator
                initialRouteName="Page 1"
                activeColor="#e91e63"
                inactiveColor="#FFF"
            barStyle={{ backgroundColor: '#009387' }}
            style={{ backgroundColor: 'tomato' }}
            >
                <Tab.Screen
                    name="Page 1"
                    component={Page1}
                    options={{
                        tabBarLabel: 'Formulario',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account-edit" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Page 2"
                    component={Page2}
                    options={{
                        tabBarLabel: 'Usuarios',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account-multiple-outline" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Page 3"
                    component={Page3}
                    options={{
                        tabBarLabel: 'Delete',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account-cancel" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>

        </NavigationContainer>
    )
};

export default Navigation;