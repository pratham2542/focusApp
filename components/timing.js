import React from 'react';
import {View, StyleSheet} from 'react-native';
import RoundedButton from './RoundedButton';

const Timing = ({changeTime}) => {
  return (
    <View style={{flexDirection:'row'}} >
      <View style={theme.TimeButton}>
        <RoundedButton size={70} text={'10'}  onPress={()=>{changeTime(10)}} />
      </View>
      <View style={theme.TimeButton}>
        <RoundedButton size={70} text={'15'}  onPress={()=>{changeTime(15)}}/>
      </View>
      <View style={theme.TimeButton}>
        <RoundedButton size={70} text={'20'} onPress={()=>{changeTime(20)}} />
      </View>
    </View>
  );
};

const theme = StyleSheet.create({
    TimeButton:{
        flex:1,
        alignItems:'center'
    }
});
export default Timing;
