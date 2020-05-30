import React from "react";
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './style';
import logoImg from '../../assets/logo.js';
import { NativeAppEventEmitter } from "react-native";

export default function Curso(){
    const navigation = useNavigation();
    const route = useRoute();
    function navigationBack(){
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <View style={style.header}>
                <Image source={logoImg}/>
                    
            </View>
        </View>
    )
}