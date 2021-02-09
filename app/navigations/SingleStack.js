import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Page1 from "../screens/Page1";
import Page2 from "../screens/Page2";
import Page3 from "../screens/Page3";

const Stack = createStackNavigator();

export default function Page3Stack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Pagina 1"
                component={Page1}
                options={{ title: "Pagina 1" }}
            />
            <Stack.Screen
                name="Pagina 2"
                component={Page2}
                options={{ title: "Pagina 2" }}
            />
            <Stack.Screen
                name="Pagina 3"
                component={Page3}
                options={{ title: "Pagina 3" }}
            />
        </Stack.Navigator>
    )
}