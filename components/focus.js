import {react ,useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import RoundedButton from './RoundedButton';

const Focus = ({addshow}) => {

    const [temp,SetTemp] = useState('');

  return (
    <View style={theme.container}>
      <View style={theme.titleContainer}>
        <Text style={theme.title}>What would you like to focus on?</Text>
        <View style={theme.input}>
          <TextInput style={{flex: 1, marginRight: 20}} onChangeText={newText => SetTemp(newText)}/>
          <RoundedButton size={50} text={'+'} rate={2.1}  onPress={() => {addshow(temp)}} />
        </View>
      </View>
    </View>
  );
};

const theme = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  input: {
    paddingTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Focus;
