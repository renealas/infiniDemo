import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useDispatch } from 'react-redux';

//import Actions from Registro
import * as registroActions from "../store/actions/registro";

//Components Call
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function Page1(props) {
    //States to save the data
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [telefono, setTelefono] = useState();
    const [correo, setCorreo] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    //dispatch Call.
    const dispatch = useDispatch();

    //function to save to Redux Store.
    const registerHandler = useCallback(async (nombre, apellido, telefono, correo) => {
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(registroActions.createUser(nombre, apellido, telefono, correo));
            resetValues();
            props.navigation.navigate('Page 2');
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    }, [dispatch, setNombre, setApellido, setTelefono, setCorreo]);
    
    //function to reset Values
    const resetValues = () => {
        setNombre();
        setApellido();
        setCorreo();
        setTelefono();
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://lh3.googleusercontent.com/proxy/MiLt8rj0Hj2sC3oBjSbHgHKE2HBn7xLp90w8bj-KPL9Uxlziy9mgHmsW86Vgu4kNKo3pbBVZ7sy7hCtsWERu8NaszxjPydLsci7pC8yvzjQgCNQ16Qej4HGRXDerci2x' }}
                resizeMode="cover"
                style={styles.image}
            />

            <FormInput
                labelValue={nombre}
                onChangeText={(userName) => setNombre(userName)}
                placeholderText="Nombre"
                iconType="user"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={apellido}
                onChangeText={(userLast) => setApellido(userLast)}
                placeholderText="Apellido"
                iconType="user"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={telefono}
                onChangeText={(userPhone) => setTelefono(userPhone)}
                placeholderText="Telefono"
                iconType="phone"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={correo}
                onChangeText={(userMail) => setCorreo(userMail)}
                placeholderText="Correo"
                iconType="inbox"
                keyboardType = 'email-address'
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormButton
                buttonTitle="Registrarse"
                onPress={() => registerHandler(nombre, apellido, telefono, correo)}
            />
        </View>
    )
}

export const screenOptions = navData => {
    return {
        headerTitle: 'Formulario',
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
    image: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        flex: 1,
    },
});