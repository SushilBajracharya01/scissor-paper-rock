import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppDispatch} from '../_redux/dispatch';
import {setShow} from '../_redux/game';

function CountDown() {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!count) {
      dispatch(setShow(true));
    }
  }, [count, dispatch]);

  return (
    <View style={styleSheet.countDown}>
      <Text style={styleSheet.counter}>{count}</Text>

      <Text style={styleSheet.message}>Choose your hand</Text>
    </View>
  );
}

export default CountDown;

const styleSheet = StyleSheet.create({
  countDown: {
    width: 200,
    height: 200,
    justifyContent: 'space-between',
    backgroundColor: '#444',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 20,
  },
  counter: {
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 90,
    fontFamily: 'ChangaOneRegular',
  },
  message: {
    fontFamily: 'AbelRegular',
    textAlign: 'center',
  },
});
