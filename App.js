import react, {useEffect, useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import Focus from './components/focus';
import Timer from './components/timer';

const STATE = {
  SUCCESS: 1,
  CANCELED: 2,
};

const App = () => {
  const [show, setShow] = useState(null);
  const [history, setHistory] = useState([]);

  const addHistoryWithStatus = (show, status) => {
    setHistory([...history, {show, status}]);
  };
  console.log(history);

  return (
    <View style={style.main}>
      {show ? (
        <Timer
          show={show}
          onTimerEnd={() => {
            addHistoryWithStatus(show, STATE.SUCCESS);
            setShow(null);
          }}
          clearSubject={() => {
            addHistoryWithStatus(show, STATE.CANCELED);
            setShow(null);
          }}
        />
      ) : (
        <Focus addshow={setShow} />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#252250',
  },
});
export default App;
