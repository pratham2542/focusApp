import React from "react";
import { View,Text,TouchableOpacity,StyleSheet } from "react-native";

const RoundedButton =({
    size=100,
    rate =3.5,
    textStyle={},
    style={},
    onPress=() => {},
    ...props
})=>{
    return(
        <View>
            <TouchableOpacity style={[styles(size,rate).radius,style]} onPress={onPress}>
                <Text style={[styles(size,rate).innertext,textStyle]}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles =(size,rate)=>StyleSheet.create({
    radius:{
        borderRadius:size/2,
        height:size,
        width:size,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'white',
        borderWidth:3
    },
    innertext:{
        fontSize:size/rate,
        color:'white',
        paddingBottom:3,
    }
})

export default RoundedButton;