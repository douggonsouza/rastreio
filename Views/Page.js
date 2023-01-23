import React from 'react';
import { View, Text } from 'react-native';
import {css} from '../assets/css/Css';


export default function Page(props)
{
    return(
        <View>
            <Text style={css.pColor}>E, desenvolvido por {props.name}.</Text>
        </View>
    );
};