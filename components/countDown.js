import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const minutesToMills = min => min * 1000 * 60;
const FormateTime = time => (time < 10 ? `0${time}` : time);
const countDown = ({minutes = 0, isPaused, onProgress, onEnd}) => {
  const interval = React.useRef(null);
  const [mills, setMills] = useState(null);

  const minute = Math.floor(mills / 1000 / 60) % 60;
  const second = Math.floor(mills / 1000) % 60;

  const count = () => {
    setMills(time => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft / minutesToMills(minutes));
      return timeLeft;
    });
  };

  useEffect(() => {
    setMills(minutesToMills(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) {
        clearInterval(interval.current);
      }
      return;
    }
    interval.current = setInterval(count, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  return (
    <View>
      <Text style={theme.text}>
        {FormateTime(minute)}:{FormateTime(second)}{' '}
      </Text>
    </View>
  );
};

const theme = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 50,
    padding: 40,
    backgroundColor: 'rgba(94,132,226,0.2)',
    borderRadius: 50,
  },
});

export default countDown;
