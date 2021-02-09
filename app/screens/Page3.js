import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import UserItem from "../components/UserItem";

export default function Page3(props) {
    let userId;

    if (typeof props.route.params !== 'undefined') {
        userId = props.route.params.id;
    } else {
        userId = null;
    }

    const users = useSelector(state => state.registro.availableUsers);

    const selected = users.find(user => user.id.toISOString() === userId);

    const selectItemHandler = (id) => {
        props.navigation.navigate('Page 2', {
            id: id.toISOString()
        });
        props.route.params.id = null;
    }

    if (userId === null) {
        return <View style={styles.centered} >
            <Text>No a Seleccionado a Ningun Usuario</Text>
        </View>
    }


    return (
        <View style={styles.container}>
            <Text>Borrar</Text>
            <Text> </Text>
            <UserItem
                nombre={selected.nombre}
                apellido={selected.apellido}
                telefono={selected.telefono}
                correo={selected.correo}
                onSelect={() => {
                    selectItemHandler(selected.id)
                }}
            />
        </View>
    )
};

export const screenOptions = navData => {
    return {
        // headerTitle: 'Borrar ' + navData.route.params.nombre + ' ' + navData.route.params.apellido,
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});