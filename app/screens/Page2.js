import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';

import UserItem from "../components/UserItem";

export default function Page2(props) {
    let usersMod;
    let usersOrig;
    let users;
    let userId;

    if (typeof props.route.params !== 'undefined') {
        userId = props.route.params.id;
    } else {
        userId = null;
    }

    console.log(userId);

    if (userId !== null) {
        usersMod = useSelector(state => state.registro.availableUsers.find(user => {
            user.id.toISOString() !== userId;
        }));
    } else {
        usersOrig = useSelector(state => state.registro.availableUsers);
    }

    if (typeof usersMod !== 'undefined') {
        console.log('Entro If');
        users = usersMod;
        console.log(usersMod);
    } else {
        console.log('Entro else');
        users = usersOrig;
        console.log(users);
    }

    const selectItemHandler = (id) => {
        props.navigation.navigate('Page 3', {
            id: id.toISOString()
        })
    }

    if (typeof users === 'undefined' || users.length === 0) {
        return <View style={styles.centered} >
            <Text>No Existen Usuarios</Text>
        </View>
    }

    return (
        <FlatList
            data={users}
            keyExtractor={item => item.id.toString()}
            renderItem={
                itemData => <UserItem
                    nombre={itemData.item.nombre}
                    apellido={itemData.item.apellido}
                    telefono={itemData.item.telefono}
                    correo={itemData.item.correo}
                    onSelect={() => {
                        selectItemHandler(itemData.item.id)
                    }}
                />
            }
        />
    )
};

export const screenOptions = navData => {
    return {
        headerTitle: 'Usuarios Registrados',
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