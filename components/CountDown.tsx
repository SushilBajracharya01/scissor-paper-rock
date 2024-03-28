import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../_redux/dispatch';
import {setChoose, setShow} from '../_redux/game';
import {EOptions} from '../constants/constants';

function CountDown() {
  const {choose} = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === -1) {
      dispatch(setChoose(true));
    } else if (count < -1) {
      dispatch(setShow(true));
    }
  }, [count, dispatch]);

  return (
    <View style={styleSheet.countDown}>
      {choose ? (
        <Text style={styleSheet.message}>Choose!!!</Text>
      ) : (
        <Text style={styleSheet.counter}>{Object.values(EOptions)[count]}</Text>
      )}
    </View>
  );
}

export default CountDown;

const styleSheet = StyleSheet.create({
  countDown: {
    width: 200,
    height: 200,
    justifyContent: 'space-between',
    backgroundColor: '#E1AFD1',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 20,
  },
  counter: {
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: '#7469B6',
    fontFamily: 'ChangaOneRegular',
  },
  message: {
    flex: 1,
    fontFamily: 'ChangaOneRegular',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
    color: '#7469B6',
  },
});
