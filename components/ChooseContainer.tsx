import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';
import {EOptions} from '../constants/constants';
import {useAppDispatch, useAppSelector} from '../_redux/dispatch';
import {setShow, setUserChoice} from '../_redux/game';
import {genericStyles} from '../constants/styles';

function ChooseContainer() {
  const {choose} = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  const handleUserChoice = (choice: EOptions) => {
    dispatch(setUserChoice(choice));
    dispatch(setShow(true));
  };
  return (
    <View style={styleSheet.btnContainer}>
      <TouchableHighlight
        style={{
          ...genericStyles.btn,
          ...{opacity: choose ? 1 : 0.5},
        }}
        disabled={!choose}
        underlayColor="#E1AFD1"
        onPress={() => handleUserChoice(EOptions.ROCK)}>
        <Image
          style={styleSheet.Icon}
          source={require('../assets/images/rock.png')}
        />
      </TouchableHighlight>

      <TouchableHighlight
        style={{
          ...genericStyles.btn,
          ...{opacity: choose ? 1 : 0.5},
        }}
        disabled={!choose}
        underlayColor="#E1AFD1"
        onPress={() => handleUserChoice(EOptions.PAPER)}>
        <Image
          style={styleSheet.Icon}
          source={require('../assets/images/paper.png')}
        />
      </TouchableHighlight>

      <TouchableHighlight
        style={{
          ...genericStyles.btn,
          ...{opacity: choose ? 1 : 0.5},
        }}
        disabled={!choose}
        underlayColor="#E1AFD1"
        onPress={() => handleUserChoice(EOptions.SCISSOR)}>
        <Image
          style={styleSheet.Icon}
          source={require('../assets/images/scissor.png')}
        />
      </TouchableHighlight>
    </View>
  );
}

export default ChooseContainer;

const styleSheet = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    marginTop: 100,
  },
  Icon: {
    width: 80,
    height: 80,
  },
});
