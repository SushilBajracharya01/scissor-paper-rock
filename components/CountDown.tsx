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
    </View>
  );
}

export default CountDown;

const styleSheet = StyleSheet.create({
  countDown: {
    height: 200,
  },
  counter: {
    textAlign: 'center',
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
  },
});
