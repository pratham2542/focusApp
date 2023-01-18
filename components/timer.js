import React, {useState} from 'react';
import {View, Text, StyleSheet,Vibration,Platform} from 'react-native';
import CountDown from './countDown';
import RoundedButton from './RoundedButton';
import {ProgressBar} from 'react-native-paper';
import Timing from './timing';
import KeepAwake from 'react-native-keep-awake';
const DEFAULT_time = 0.1;
const Timer = ({show,clearSubject,onTimerEnd}) => {
  KeepAwake.activate();

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(DEFAULT_time);
  const onProgress = progress => {
    setProgress(progress);
  };


const vibrate=()=>{
  if(Platform.OS ==='ios'){
    const interval = setInterval(()=>{Vibration.vibrate(),1000});
    setTimeout(()=>{clearInterval(interval),10000});
  }else{
    Vibration.vibrate(10000);

  }
}

  const onEnd=()=>{
    vibrate();
    setMinutes(DEFAULT_time);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  }
  const onChangeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    
    <View style={theme.container}>
      <View style={theme.clock}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>

      <View style={theme.part1}>
        <Text style={theme.title}>Focusing on:</Text>
        <Text style={theme.subject}>{show}</Text>
      </View>
      <View style={{paddingTop: 15, paddingHorizontal: 20}}>
        <ProgressBar
          progress={progress}
          color={'#3A5E90'}
          style={{height: 10, borderRadius: 5, overflow: 'hidden'}}
        />
      </View>
      <View style={theme.buttonWrapper}>
        <Timing changeTime={onChangeTime} />
      </View>
      <View style={theme.buttonWrapper}>
        {isStarted ? (
          <RoundedButton
            text={'Pause'}
            size={150}
            rate={4}
            onPress={() => { 
              setIsStarted(false);
            }}
          />
        ) : (
          <RoundedButton
            text={'Start'}
            size={150}
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
      </View>
      <View style={theme.clearButton}>
        <RoundedButton size={60} rate={2} text={'-'} onPress={()=>{
          clearSubject();
        }} />
      </View>
    </View>
  );
};

const theme = StyleSheet.create({
  container: {
    flex: 1,
  },
  part1: {
    paddingTop: 45,
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  subject: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  clock: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButton:{
    paddingLeft:30,
    paddingBottom:30
  }
});
export default Timer;
