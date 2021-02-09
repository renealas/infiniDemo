import React from 'react';
import { View, Text, Image, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

import Card from './Card';

const UserItem = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <Card style={styles.product}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onSelect} useForeground>
                    <View>
                        <View style={styles.contenedorGeneral}>
                        <View style={styles.details}>                            
                            <Text style={styles.title}>{props.nombre}</Text>
                            <Text style={styles.title}>{props.apellido}</Text>
                            <Text style={styles.price}>{props.telefono}</Text>
                            <Text style={styles.price}>{props.correo}</Text>
                        </View>
                        </View>                        
                    </View>
                </TouchableCmp>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    product: {
        height: 150,
        margin: 20,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    contenedorGeneral: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: 'center',      
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
        fontWeight: 'bold',
    },
    numberContainer:{
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginVertical: 10,
        fontFamily: 'number'
    },  
    number: {
        fontSize: 50,
        marginVertical: 4,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    price: {
        fontSize: 14,
        color: '#888',
        fontWeight: 'bold',
    },
    details: {
        alignItems: 'center',
        height: '5%',
        padding: 5,
        marginVertical: 4,
        flexDirection: 'column'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    touchable: {
        overflow: 'hidden',
        borderRadius: 10,
    },
});

export default UserItem;